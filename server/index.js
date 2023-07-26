const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end('{"status":"ok"}');
});

server.listen(8080, () => {
    console.log('Server running at port 8080');
});
