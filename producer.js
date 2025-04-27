const { Queue } = require("bullmq");

const notificationQueue = new Queue("email-queue", {
  connection: {
    host: "127.0.0.1",
    port: "6379",
  },
});

async function init() {
  const result = await notificationQueue.add("email to Prabal", {
    email: "singhprabal211@gmail.com",
    subject: "Hello from BullMQ",
    body: "This is a test email from BullMQ",
  });

  console.log("Job added to queue:", result.id);
}

init();
