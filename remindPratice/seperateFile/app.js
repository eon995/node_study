const fs = require('fs').promises;
const path = require('path');


fs.readdir('/Users/fjr02/Desktop/playground')
    .then(console.log)
    .catch(console.error);