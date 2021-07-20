import { response } from 'express';
import jwt from 'jsonwebtoken';

const member = [{
    'username': 'eon123',
    'password': '12345',
    'name': 'eon',
    'email': 'eon02@naver.com',
    'url': ''
}];

const secret = 'iaoojnivioajsioj901';

export async function createMember(username, password, name, email, url) {
    const inputMember =
    {
        username,
        password,
        name,
        email,
        url
    }


    member.push(inputMember);
    console.log(member);
    return inputMember;

}

export async function login(username, password) {
    const idCheck = member.find((m) => m.username === username);
    var boolean;
    if (idCheck !== null) {
        boolean =  await passwordCheck(idCheck, password);
    } else {
        boolean = false;

    }
    return boolean;

}

export async function passwordCheck(idCheck, password) {

    var boolean;
    if (idCheck.password === password) {
        boolean = true;
    } else {
        boolean = false;
    }
    return boolean;
}

export async function getToken(){
    
    const token = jwt.sign({
        id: 'userId',
        isAdmin: true,
    }, sercret);
    return token;
}

export async function verifyToken(token){
    
}
