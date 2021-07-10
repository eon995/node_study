const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const name = 'EON';
const courses = [
    {
        name: 'HTML'
    }, {
        name: 'CSS'
    }, {
        name: 'JS'
    }, {
        name: 'node'
    }
];

const place = path.dirname(__filename);
const truePlace = place + path.sep + 'templates' + path.sep + 'index.ejs';

const server = http.createServer((req, res) => {
    console.log('incoming..');

    const url = req.url;
    if (url === '/') {
        ejs
            .renderFile('./templates/index.ejs', { name })
            .then(data => res.end(data));
    } else if (url === '/courses') {
        ejs
            .renderFile('./templates/courses.ejs', { courses })
            .then(data => res.end(data));
    } else { }

});

server.listen(8080);

