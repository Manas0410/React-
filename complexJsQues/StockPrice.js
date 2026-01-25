// ### *3️⃣ Write a function that fetches stock prices every X seconds and stops when the price reaches a target or after N attempts.*

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
async function watchStock({
  fetchPrice,
  targetPrice,
  interval = 2000,
  maxAttempts = 10,
}) {
  let attempts = 0;

  while (attempts < maxAttempts) {
    attempts++;

    const price = await fetchPrice();
    console.log(`Attempt ${attempts}: ₹${price}`);

    if (price >= targetPrice) {
      return { success: true, price, attempts };
    }

    await sleep(interval);
  }

  return { success: false, attempts };
}

// Example usage:
let current = 90;

async function fetchPrice() {
  await sleep(500);
  current += Math.floor(Math.random() * 5);
  return current;
}
watchStock({
  fetchPrice,
  targetPrice: 100,
  interval: 2000,
  maxAttempts: 8,
})
  .then((res) => console.log("✅", res))
  .catch((err) => console.log("❌", err));
