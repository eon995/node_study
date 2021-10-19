const http = require('http');


const server = http.createServer((req, res) => {
    console.log('incoming');
    console.log(req.headers);
    console.log(req.httpVersion);
    res.write('welcome!');
    res.end();
});

server.listen(8080);