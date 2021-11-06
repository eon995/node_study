import * as authRepository from '../Data/auth.js';
import jwt from 'jsonwebtoken';


const jwtSecretKey = 'lodjojasdonme12';
const jwtexpiresInDays = '2d';


export async function createAccount(req, res) {
    const { id, password, name, username, email } = req.body;


    const found = await authRepository.findOverlap(id, username, email);

    if (found) {
        return res.status(409).json({ message: `${found}가 이미 있습니다.` });
    }

    const account = await authRepository.createAccount(id, password, name, username, email);

    const token = createJwtToken(account.id);

    console.log(token);

    return res.status(201).json({ token, account });

}





export function Login(req, res) {
    const { id, password } = req.body;

    const check = authRepository.checkPassword(id, password);
    if (!check) {
        return res.status(401).json({ message: 'id 혹은 password 가 틀렸습니다.' })
    }

    return res.status(200).json({ message: ' 로그인 성공' });
}

async function createJwtToken(id) {
    return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtexpiresInDays });
}


// export async function findOverlap(id, username, email, res, next) {

//     const checkId = authRepository.checkId(id);
//     const checkUsername = authRepository.checkUsername(username);
//     const checkEmail = authRepository.checkEmail(email);

//     if (checkId) {
//         res.status(400).message("중복된 id가 이미 있습니다.");
//     }
//     // else if (checkUsername) {
//     //     res.status(409).message("중복된 username가 이미 있습니다.");
//     // } else if (checkEmail) {
//     //     res.status(409).message("중복된 email이 이미 있습니다.");
//     // }

//     return next();

// }
