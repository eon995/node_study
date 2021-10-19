import dotenv from 'dotenv';
dotenv.config();

function required(key, defaultValue = undefined) {
    const value = process.env[key] || defaultValue;
    if (value == null) {
        throw new Error(`key ${key} is undefined`);
    }

}

export const config = {
    jwt: {
        sercretKey: required('JWT_SECERET'),
        expireIn: parseInt(required('JWT_EXPIRES_SEC', 86400))
    },
    bcrypt: {
        saltRounds: parseInt(required('BCRYPT_SALT_ROUND', 12))
    },
};