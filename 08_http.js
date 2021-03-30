const http = require('http');

//creating server
const server = http.createServer((req,res) =>{
    
    // Response to user
    res.write('Hello there user');
    // closing response
    res.end();
})

server.listen(3000, () => console.log('Server is up and running'));