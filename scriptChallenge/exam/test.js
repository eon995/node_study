const process = require('process');
const path = require('path');
const fs = require('fs');

const folder = process.argv;

var result = fs.existsSync('./photo');
console.log(result);

const file = './video/a.mp4';

const file1 = path.dirname(file);

const filename = 'a.mp4';

const regExp = /(mp4|mov)$/gm;
const match = filename.match(regExp);

console.log(!!match);

