export default {
  red: (str) => console.log(`\u001b[31m${str}\u001b[37m`),
  green: (str) => console.log(`\u001b[32m${str}\u001b[37m`),
  yellow: (str) => console.log(`\u001b[33m${str}\u001b[37m`),
  blue: (str) => console.log(`\u001b[34m${str}\u001b[37m`),
  magenta: (str) => console.log(`\u001b[35m${str}\u001b[37m`),
  cyan: (str) => console.log(`\u001b[36m${str}\u001b[37m`),
};
