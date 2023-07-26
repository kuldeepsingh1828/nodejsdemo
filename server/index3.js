//create http server running on port 8080 and render index.html if url is / or /index.html
//if url is /login, render login.html
//if url is /login?username=abc&password=123, render login.html and show username and password


const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log(req.url)
    if (req.url == '/' || req.url == '/index.html') {
        fs.readFile('/Users/kuldeep/nodejsdemo/server/views/index.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (req.url.includes('/login')) {
        let query = url.parse(req.url, true).query;
        console.log(query)
        fs.readFile('/Users/kuldeep/nodejsdemo/server/login.html', function (err, data) {
            if (err) {
                console.log(err)
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end("404 Not Found");
    }
}
);

server.listen(8080, function () {
    console.log('Server is running at port 8080');
}
);