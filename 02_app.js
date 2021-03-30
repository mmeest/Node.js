console.log("Hello World!");

// importing from 'sayName.js'
const getUserInfo = require('./03_sayName');

// function 'sayName()' from 'sayName.js'
getUserInfo.sayName();

console.log

// getting directory name
console.log(`Directory name: ${__dirname}`);

// getting file name
console.log(`File name: ${__filename}`);