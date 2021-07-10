const http = require('http');
const fs = require('fs');
const path = require('path');

const place = path.dirname(__filename);
const truePlace = place + path.sep + 'html' + path.sep + 'index.html';



const server = http.createServer((req, res) => {
    console.log('incoming..');

    const url = req.url;
    if (url == '/') {
        res.setHeader('content-Type', 'text/html');
        const stream = fs.createReadStream(truePlace);
        stream.pipe(res);
    } else if (url == '/courses') {

    } else {

    }

});

server.listen(8080);

