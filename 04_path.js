const path = require('path');

// appending paths
const fileLocation = path.join(__dirname, 'app.js');

console.log(fileLocation);

// getting filename
const fileName = path.basename(fileLocation);

console.log(fileName);

// file extension
const fileExt = path.extname(fileName);

console.log(fileExt);