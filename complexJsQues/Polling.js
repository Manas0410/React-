const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function pollJobStatus({
  jobId,
  checkStatus,
  interval = 2000,
  timeout = 30000,
}) {
  const startTime = Date.now();

  while (true) {
    const status = await checkStatus(jobId);
    console.log("Status:", status);

    if (status === "completed") {
      return "SUCCESS";
    }

    if (status === "failed") {
      throw new Error("Job failed");
    }

    if (Date.now() - startTime > timeout) {
      throw new Error("Polling timed out");
    }

    await sleep(interval);
  }
}

// Example usage:

let count = 0;

async function checkStatus(jobId) {
  await sleep(500);
  count++;
  return count < 4 ? "processing" : "completed";
}

pollJobStatus({
  jobId: 123,
  checkStatus,
  interval: 2000,
  timeout: 10000,
})
  .then((res) => console.log("✅", res))
  .catch((err) => console.log("❌", err.message));
