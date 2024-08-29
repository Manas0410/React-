import axios, { AxiosError } from "axios";

type PollingOptions = {
  targetRate: number;
  maxAttempts: number;
  pollInterval: number;
  timeout: number;
};

class PollingService {
  private attempt: number = 0;
  private readonly options: PollingOptions;

  constructor(options: PollingOptions) {
    this.options = options;
  }

  async pollForExchangeRate(): Promise<void> {
    while (this.attempt < this.options.maxAttempts) {
      try {
        this.attempt++;
        const exchangeRate = await this.fetchExchangeRate();

        if (exchangeRate > this.options.targetRate) {
          console.log(`Target exchange rate met: ${exchangeRate}`);
          break;
        }

        console.log(
          `Attempt ${this.attempt}: Current exchange rate is ${exchangeRate}. Continuing to poll...`
        );
        await this.delay(this.options.pollInterval);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          await this.handleAxiosError(error);
        } else {
          console.error("Unexpected error:", error);
          break;
        }
      }
    }

    if (this.attempt >= this.options.maxAttempts) {
      console.log("Maximum attempts reached. Stopping polling.");
    }
  }

  private async fetchExchangeRate(): Promise<number> {
    try {
      const response = await axios.get("https://api", {
        timeout: this.options.timeout,
      });
      return response.data.rate;
    } catch (error) {
      throw error;
    }
  }

  private async handleAxiosError(error: AxiosError): Promise<void> {
    if (error.code === "ECONNABORTED") {
      console.warn("Request timed out. Retrying...");
    } else if (error.response?.status === 429) {
      console.warn("Rate limit exceeded. Backing off before retrying...");
    } else if (error.response?.status === 500) {
      console.warn("Server error encountered. Retrying...");
    } else {
      throw error;
    }

    await this.backoffRetry();
  }

  private async backoffRetry(): Promise<void> {
    const delay = Math.min(2 ** (this.attempt - 1), 32) * 1000;
    console.log(`Retrying after ${delay / 1000} seconds...`);
    await this.delay(delay);
  }

  //   for delay function
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

// Example usage:
const pollingOptions: PollingOptions = {
  targetRate: 1.2, // Target USD to EUR exchange rate
  maxAttempts: 20,
  pollInterval: 5000, // Poll every 5 seconds
  timeout: 3000, // Timeout for each request
};

const pollingService = new PollingService(pollingOptions);
pollingService.pollForExchangeRate();
