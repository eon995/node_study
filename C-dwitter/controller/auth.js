import * as authRepository from '../data/auth.js';
import jwt from 'jsonwebtoken';
import { } from 'express-async-errors';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.JWT_SECERET);

export async function createMember(req, res, next) {
    const { username, password, name, email, url } = req.body;
    const found = await authRepository.findByusername(username);
    if (found) {
        return res.status(409).json({ message: `${username} already exists` })
    }
    const hashed = await bcrypt.hash(password, 10);
    const member = await authRepository.createMember(username, password, name, email, url);
    const token = await getToken(member.id);
    res.status(201).json({ token, member });

}

export async function loginMember(req, res, next) {
    const { username, password } = req.body;
    const login = await authRepository.login(username, password);

    if (!login) {
        res.status(400).send('id 혹은 비밀번호가 틀렸습니다');
    }
    const token = await getToken(login.id);
    console.log(token);
    res.status(200).json({ token, message: '로그인 성공' });
}


export async function getToken(id) {
    return jwt.sign({ id }, secret, { expiresIn: jwtExpiresInDays })
}

export async function me(req, res, next) {
    const user = await authRepository.findById(req.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ token: req.token, username: user.username });
}





