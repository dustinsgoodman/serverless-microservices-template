// define environment variables
const dotenv = require('dotenv').config({ path: './.env.test' });

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
  throw err;
})

// ------------ GLOBAL HELPERS -----------------
// add ability to sleep between tests in case of 3rd party
// race condition issues like mongo updates followed by reads
global.sleep = function (ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
};
