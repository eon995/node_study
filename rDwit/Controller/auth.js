import * as authRepository from '../Data/auth.js';

export function test(id, password) {
    const test = authRepository.comparePassword(id, password);
    return test;
}