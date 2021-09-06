const http = require('http');

const request = async (url) => {
    return new Promise(resolve => {

        const req = http.request(url, res => {
            let str = '';

            res.on('data', chunk => void (str += chunk));
            res.on('end', () => resolve(str));
        });

        req.end();
    });
}

module.exports = request;
