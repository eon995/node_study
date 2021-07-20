import bcrypt from 'bcrypt';



const password = 'abcabc';
const hashed = bcrypt.hashSync(password, 10);
console.log(`password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync('abcddd', hashed)