process.env.NODE_ENV = "test";

// import { chromeLauncher } from "@web/test-runner";
const { chromeLauncher } = require("@web/test-runner");

module.exports = {
  plugins: [require("@snowpack/web-test-runner-plugin")()],
  browsers: [
    chromeLauncher({
      launchOptions: {
        // args: ["--no-sandbox"]
        executablePath: "/usr/bin/chromium-browser",
        args: [
          // "--disable-gpu",
          // "--disable-dev-shm-usage",
          // "--disable-setuid-sandbox",
          // "--no-first-run",
          "--no-sandbox",
          // "--no-zygote",
          // "--single-process",
        ],
      },
    }),
  ],
};
