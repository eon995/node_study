
const jwt = require('jsonwebtoken');

const token = jwt.sign({
    id: 'userId',
    isAdmin: true,
}, 'iaoojnivioajsioj901');

console.log(token);