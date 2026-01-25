function createRateLimiter({ capacity = 3, refillRate = 1 }) {
  let tokens = capacity;
  let lastRefill = Date.now();

  return async function limit(fn) {
    refillTokens();

    if (tokens < 1) {
      const waitTime = (1 - tokens) * 1000;
      console.log(
        `⏳ No tokens. Waiting ${waitTime.toFixed(0)}ms for refill...`,
      );
      await sleep(waitTime);
      refillTokens();
    }

    tokens--;
    console.log(`🪙 Token used. Tokens left: ${tokens.toFixed(2)}`);
    return fn();
  };

  function refillTokens() {
    const now = Date.now();
    const elapsed = (now - lastRefill) / 1000;
    const refill = elapsed * refillRate;

    if (refill > 0) {
      tokens = Math.min(capacity, tokens + refill);
      lastRefill = now;
      console.log(`🔄 Refilled → Tokens: ${tokens.toFixed(2)}`);
    }
  }
}

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

// Example usage:

async function apiCall(id) {
  const duration = Math.floor(Math.random() * 3000) + 500; // 0.5s–3.5s
  console.log(`🚀 API ${id} started (will take ${duration}ms)`);

  await sleep(duration);

  console.log(`✅ API ${id} finished`);
}

const limiter = createRateLimiter({
  capacity: 3,
  refillRate: 1,
});

(async () => {
  for (let i = 1; i <= 10; i++) {
    await limiter(() => apiCall(i));
  }
})();
