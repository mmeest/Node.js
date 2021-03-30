const fs = require('fs');

// On reading we have to pass filename and encoding
fs.readFile('./message.txt', 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
})