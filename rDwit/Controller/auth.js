import * as authRepository from '../Data/auth.js';

export function test(id, password) {
    const test = authRepository.comparePassword(id, password);
    return test;
}


export async function createAccount(req, res) {
    const { id, password, name, username, email } = req.body;
    const account = authRepository.createAccount(id, password, name, username, email);
    res.status(201).json(account);

}