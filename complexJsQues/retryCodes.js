const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function fetchWithRetry(fn, { retries = 3, delay = 1000 } = {}) {
  let attempt = 0;

  while (attempt < retries) {
    try {
      const response = await fn();

      if (!response.ok) {
        // retry only for retryable codes
        if (
          response.status === 429 ||
          (response.status >= 500 && response.status <= 599)
        ) {
          throw response;
        }
        // non-retryable
        return response;
      }

      return response;
    } catch (err) {
      attempt++;

      if (attempt === retries) {
        throw err;
      }

      console.log(`Retrying in ${delay}ms...`);
      await sleep(delay);
    }
  }
}

// Example usage:

fetchWithRetry(() => fetch("/api/data"), {
  retries: 5,
  delay: 2000,
})
  .then((res) => res.json())
  .then((data) => console.log("✅ Success", data))
  .catch((err) => console.error("❌ Failed", err));
