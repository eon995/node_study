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

export function comparePassword(id, password) {
    return accountList.find((t) => t.id == id);
}


//create account (sign up)
export function createAccount() {

}

