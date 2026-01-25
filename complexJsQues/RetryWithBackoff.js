function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retryWithBackoff(
  fn,
  { retries = 5, delay = 500, maxDelay = 5000 } = {},
) {
  let attempt = 0;
  let currentDelay = delay;

  while (attempt < retries) {
    try {
      return await fn(); // try API
    } catch (err) {
      attempt++;

      if (attempt === retries) {
        throw err; // give up
      }

      console.log(`Retrying in ${currentDelay}ms...`);

      await sleep(currentDelay);
      currentDelay = Math.min(currentDelay * 2, maxDelay); // exponential + cap
    }
  }
}

//// Example usage:

async function fakeApi() {
  if (Math.random() < 0.7) {
    throw new Error("API failed");
  }
  return "Success!";
}

retryWithBackoff(fakeApi, {
  retries: 4,
  delay: 1000,
  maxDelay: 8000,
})
  .then((res) => console.log("✅", res))
  .catch((err) => console.log("❌ Failed after retries"));
