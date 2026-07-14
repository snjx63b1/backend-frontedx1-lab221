const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type':'text/html' });
        res.write('<html><body> <br> This is Home Page </body> </html>');
        res.end();
    }

    else if(req.url == '/student') {
        res.writeHead(200, {'Content-Type':'text/html' });
        res.write('<html><body> <br> This is a Student page </body> </html>');
        res.end();
    }

    else if(req.url == '/usn') {
        res.writeHead(200, {'Content-Type':'text/html' });
        res.write('<html><body> <br> This is an USN page </body> </html>');
        res.end();
    }

    else if(req.url == '/course') {
        res.writeHead(200, {'Content-Type':'text/html' });
        res.write('<html><body> <br> This is an Course page </body> </html>');
        res.end();
    }

    else if(req.url == '/admin') {
        res.writeHead(200, {'Content-Type':'text/html' });
        res.write('<html><body> <br> This is an Admin page </body> </html>');
        res.end();
    }

    else {
        res.writeHead(404, {'Content-Type':'text/html' });
        res.write('<html><body> <br> 404 Not found,invalid request </body> </html>');
        res.end();
    }

});

let port = 5243;
server.listen(port);
console.log("Node server is running at port 5243");
console.log("use => http://localhost:5243 ");
