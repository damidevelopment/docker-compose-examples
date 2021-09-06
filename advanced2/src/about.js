const http = require('http');

const server = http.createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end("I'm about service!");
});

const port = 8080;
server.listen(port, () => console.log(`HTTP server listen on http://localhost:${port}`));
