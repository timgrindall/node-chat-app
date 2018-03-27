var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year');
// console.log(date.format('MMM Do, YYYY'))

var time = moment();
console.log(time.format('h:mm a'));