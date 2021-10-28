const jwt = require('jsonwebtoken');

const token = jwt.sign({
    id: 'userId',
    isAdmin: 'true'
}, 'abc123', { expiresIn: 10 });

console.log(token);

jwt.verify(token, 'abc123', (error, decoded) => {
    console.log(error, decoded);
});