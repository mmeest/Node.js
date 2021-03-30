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