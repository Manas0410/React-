function fakeApi(id, delay) {
  return new Promise((resolve) => {
    console.log(`⏳ Start API ${id}`);
    setTimeout(() => {
      console.log(`✅ End API ${id}`);
      resolve(`Result ${id}`);
    }, delay);
  });
}

const tasks = [
  () => fakeApi(1, 2000),
  () => fakeApi(2, 1000),
  () => fakeApi(3, 3000),
  () => fakeApi(4, 1500),
];

async function limitConcurrency(tasks, limit) {
  const results = [];
  let index = 0;

  async function worker(workerId) {
    while (index < tasks.length) {
      const currentIndex = index++;
      console.log(`👷 Worker ${workerId} running task ${currentIndex}`);
      results[currentIndex] = await tasks[currentIndex]();
    }
  }

  const workers = Array.from({ length: limit }, (_, i) => worker(i + 1));
  //   console.log(workers, "workers");
  await Promise.all(workers);

  return results;
}

limitConcurrency(tasks, 3).then((res) => {
  console.log("🎉 All done:", res);
});
