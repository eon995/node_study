import * as authRepository from '../data/auth.js';
import jwt from 'jsonwebtoken';

export async function createMember(req, res, next) {
    const { username, password, name, email, url } = req.body;
    const member = await authRepository.createMember(username, password, name, email, url);

    res.status(201).json(member);

}

export async function loginMember(req, res, next) {
    const { username, password } = req.body;
    var login = await authRepository.login(username, password);
    console.log(login);
    if (login === true) {
        res.status(200).send('로그인 성공');
    } else {
        res.status(400).send('id 혹은 비밀번호가 틀렸습니다');
    }

}




