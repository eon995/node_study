const jwt = require('jsonwebtoken');

const token = jwt.sign({
    id: 'userId',
    isAdmin: 'true'
}, 'abc123');

console.log(token);