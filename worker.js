const { Worker } = require("bullmq");

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`message received id: ${job.id}`);
    console.log("Processing Message...");
    console.log(`Sending Email to: ${job.data.email}`);
    await sendEmail();
    console.log("Email sent successfully!");
  },
  {
    connection: {
      host: "127.0.0.1",
      port: 6379,
    },
  }
);
const sendEmail = () =>
  new Promise((res, rej) => setTimeout(() => res(), 5 * 1000));
