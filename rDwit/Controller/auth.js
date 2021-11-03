import * as authRepository from '../Data/auth.js';



export async function createAccount(req, res) {
    const { id, password, name, username, email } = req.body;


    const found = await authRepository.findOverlap(id, username, email);

    if (found) {
        return res.status(409).json({ message: `${found}가 이미 있습니다.` });
    }

    const account = authRepository.createAccount(id, password, name, username, email);

    return res.status(201).json(account);

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
