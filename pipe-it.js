var request = require('request');

//var s = request('http://www.pluralsight.com');

//s.pipe(process.stdout);

//request("http://www.pluralsight.com").pipe(process.stdout);

// pipe to file

var fs = require("fs");

request("http://www.pluralsight.com").pipe(fs.createWriteStream('pluralsight.html'));

console.log('finished');