const os = require('os');

var totalmomory = os.totalmem();
var freemomory = os.freemem();

console.log(`Total Memory ${totalmomory}`);
console.log(`Free Memory ${freemomory}`);