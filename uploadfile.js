var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2019&month=April';
var q = url.parse(adr, true);

console.log(q.host); // returns localhost:8080
console.log(q.pathname);  // returns default.htm
console.log(q.search);  // returns year=2019&month=April

var qdata = q.query; // returns an object: { year:2019, month:April }
console.log(qdata.year); //returns 2019
console.log(qdata.month); //returns April