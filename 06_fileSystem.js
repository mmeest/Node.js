const fs = require('fs');

// We create file named 'message.txt' with contents 'Hello there node'
fs.writeFile('message.txt', 'Hello there node', (err) => {
    if(err) throw err;

    console.log('file has been written');
})