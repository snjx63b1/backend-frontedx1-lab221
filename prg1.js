const http = require('http');
const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain' });
	res.end('Welcome to Nodejs');
});

let port=1050;
server.listen(port);
console.log('Node js server localhost:1050');