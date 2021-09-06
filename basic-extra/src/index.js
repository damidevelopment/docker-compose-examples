const http = require('http');
const fetch = require('./request');

const server = http.createServer(async (req, res) => {
    if (req.url === '/greed') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('world');
    }

    const greed = await fetch('http://extra-web2.local/greed');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`Hello ${greed}!`);
});

const port = 8080;
server.listen(port, () => console.log(`HTTP server listen on http://localhost:${port}`));
