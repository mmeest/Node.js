<p align="center"><img src="ns.png" width="300px"></p>

<h1 align="center">
    <strong>Node.js</strong>
</h1>
<h3 align="center">
    <p>JavaScript Node.js Runtime</p>
</h3>
<h3 align="center">
    <a target="_blank" href="https://nodejs.org/en/">Node.js</a>
    <span> . </span>    
    <a target="_blank" href="https://en.wikipedia.org/wiki/Node.js">Wikipedia</a>
    <span> . </span>    
    <a target="_blank" href="https://www.w3schools.com/nodejs/default.asp">W3 Schools</a>
</h3>
<br><br>

<hr>

### Contents
- [Node.js](#node.js)
- [NPM or Node Package Manager](#npm-or-node-package-manager)
- [Running a Script](#running-a-script)
- [Hello World](#hello-world)
- [Export and Import](#export-and-import)
- [Getting a File and Folder name](#getting-a-file-and-folder-name)
- [Path](#path)
- [URL](#url)
- [File System](#file-system)
- [Server](#Server)

<hr>

### Node.js
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts. 

* Author - Ryan Dahl
* Developer - OpenJS Foundation
* First release - 27 may 2009
* Link - https://nodejs.org/en/
* File extension - .js

Checking node version
```
node --version
```

<hr>

### NPM or Node Pacage Manager
With node we get 'node package manager' or npm\
Checking npm version
```
npm --version
```

When creating a package we need to initialize npm
```
npm init
```
This will ask different questions about our package and create 'package.json' file. For example
```
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "This is introduction to Node",
  "main": "01_helloworld.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "Node.js"
  ],
  "author": "Martin Maasik",
  "license": "ISC"
}
```
In this file there are dependencies for libraries and frameworks or packages we install

Let's install 'nodemon' package
```
npm install nodemon
```

This will add to our json file dependencies
```
"dependencies": {
  "nodemon": "^2.0.7"
}
```

With nodemon we don't have to start and stop our server every time we change our code

<hr>

### Running a script
To add a script to our package we can write it to 'package.json'
For example to run '01_helloworld.js' file
```
"scripts": {
  "develop": "node 01_helloworld.js",
},
```

To run that script 
```
npm run develop
```

To add nodemon script
```
"devnode": "nodemon 01_helloworld.js"
```

And to run it
```
npm run devnode
```

<hr>

### Hello world
Let's create file named 'app.js' and add a code
```
console.log("Hello World!");
```

To run this code just type in terminal
```
node app
```

Output will be: *Hello World!*

<hr>

### Export and Import
To export a function from node file we need module 'export'
```
const sayName = () => {
    console.log('Hello there Ed');
}

module.exports = sayName;
```

To import it in another node file we need import
```
const sayName = require('./sayName');

sayName();
```

Exporting an object
```
const sayName = () => {
    console.log('Hello there Ed');
};

const sayAddress = () => {
    console.log('Johnson Street');
};

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;
```

On import
```
const getUserInfo = require('./sayName');

console.log(getUserInfo);
```
we get
```
{ sayName: [Function: sayName], sayAddress: [Function: sayAddress] }
```

Importing Node.js module
```
const url = require('url');
```

<hr>

### Getting file and folder name
To print out current directory and filename
```
// getting directory name
console.log(`Directory name: ${__dirname}`);

// getting file name
console.log(`File name: ${__filename}`);
```

<hr>

### Path
https://nodejs.org/api/path.html
```
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
```

### URL
https://nodejs.org/api/url.html
```
const url = require('url');

const address = 'http://localhost:8080/default.html?year=2017&month=february'

const parsedUrl = url.parse(address, true);

// parsing only host, printout: localhost:8080
console.log(parsedUrl.host);

// parsing only pathname, printout: /default.html
console.log(parsedUrl.pathname);

// parsing only query, printout: [Object: null prototype] { year: '2017', month: 'february' }
console.log(parsedUrl.query);

// parsing only query(year), printout: 2017
console.log(parsedUrl.query.year);

// parsing only query(month), printout: february
console.log(parsedUrl.query.month);
```

### File system
https://nodejs.org/api/fs.html

Writing a file
```
const fs = require('fs');

// We create file named 'message.txt' with contents 'Hello there node'
fs.writeFile('message.txt', 'Hello there node', (err) => {
    if(err) throw err;

    console.log('file has been written');
})
```

Reading file
```
const fs = require('fs');

// On reading we have to pass filename and encoding
fs.readFile('./message.txt', 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
})
```

<hr>

### Server
https://nodejs.org/api/http.html
```
const http = require('http');

//creating server
const server = http.createServer((req,res) =>{
    console.log(req);
    // Response to user
    res.write('Hello there user');
    // closing response
    res.end();
})

server.listen(3000, () => console.log('Server is up and running'));
```

Running this code we get response
```
Server is up and running
```

On browser 'https://localhost:3000/' user get response
```
Hello there user
```

Use Ctrl+C to close server on VSCode

Parsing a html as a response to user request:
```
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url === '/'){

        fs.readFile(path.join(__dirname, 'index.html'), (err, data) =>{
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })

    }
    if(req.url === '/user'){
        res.write('Welcome user johnson');
        res.end();
    }
});

server.listen(3000, () => console.log('Server is up and running'));
```

# HAPPY CODING !!! :)
