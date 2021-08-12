import { response } from 'express';


let member = [{
    username: 'eon123',
    password: '12345',
    name: 'eon',
    email: 'eon02@naver.com',
    url: '',
    id: '1'
},
{
    username: 'eon',
    password: '12345',
    name: 'eon',
    email: 'eon02@naver.com',
    url: '',
    id: '2'
}];


////////////////////////////// MEMBER///////////////////////////
////////////////////////////// MEMBER///////////////////////////
////////////////////////////// MEMBER///////////////////////////
export async function createMember(username, password, name, email, url) {
    const inputMember =
    {
        username,
        password,
        name,
        email,
        url,
        id: Date.now().toString()
    }



    member.push(inputMember);
    return inputMember;

}


export async function findByusername(username) {

    return member.find((m) => m.username === username);
}

export async function findById(id) {
    return member.find((m) => m.id === id);
}

////////////////////////////// login///////////////////////////
////////////////////////////// login///////////////////////////
////////////////////////////// login///////////////////////////

export async function login(username, password) {
    const idCheck = member.find((m) => m.username === username);
    if (idCheck) {
        return passwordCheck(password);

    } else {
        return null;
    }
}

export async function passwordCheck(password) {
    return member.find((m) => m.password === password);
}
