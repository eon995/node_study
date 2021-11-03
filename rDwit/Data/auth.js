import { response } from 'express';
import { check } from 'express-validator';

let accountList = [{
    id: 'abc123',
    password: '123123',
    name: 'eon',
    username: 'Eon',
    email: 'abc123@gmail.com'
},
{
    id: 'abc456',
    password: '456456',
    name: 'bob',
    username: 'Bob',
    email: 'abc456@gmail.com'
}];
//find ps by id (login)

export function checkId(id) {
    return accountList.find((t) => t.id == id);
}

export function checkUsername(username) {
    return accountList.find((t) => t.username == username);
}

export function checkEmail(email) {
    return accountList.find((t) => t.email == email);
}


//create account (sign up)
export function createAccount(id, password, name, username, email) {
    const account = {
        id,
        password,
        name,
        username,
        email
    };
    accountList = [account, ...accountList];
    return accountList;

}

export function findOverlap(id, username, email) {
    if (checkId(id)) {
        return id;
    } else if (checkUsername(username)) {
        return username;
    } else if (checkEmail) {
        return email;
    } else {
        return 0;
    }

}



