const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
    console.log(req.url)
    if (req.url == '/') {
        res.end("Home");
    } else if (req.url.includes('/login')) {
        let query = url.parse(req.url, true).query;
        console.log(query)
        res.end(`Login Page username: ${query.username} password: ${query.password}`);
    } else {
        res.end("Page not found");
    }
});


server.listen(8080, () => {
    console.log('Server running at port 8080');
});
