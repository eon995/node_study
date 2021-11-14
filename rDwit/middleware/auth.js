import jwt from 'jsonwebtoken';
import * as userRepository from '../data/auth.js';
import { jwtSecretKey } from '../Controller/auth.js';

const AUTH_ERROR1 = { message: "auth error 1" };
const AUTH_ERROR2 = { message: "auth error 2" };
const AUTH_ERROR3 = { message: "auth error 3" };

export const isAUth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!(authHeader && authHeader.startsWith('Bearer'))) {
        return res.status(401).json(AUTH_ERROR1);
    }



    const token = authHeader.split(' ')[1];

    console.log(token);
    console.log(jwtSecretKey);

    jwt.verify(
        token,
        jwtSecretKey,
        async function (error, decoded) {
            if (error) {
                console.log(error);
                return res.status(401).json(AUTH_ERROR2);
            }
            const user = await userRepository.checkId(decoded.id);
            if (!user) {
                return res.status(401).json(AUTH_ERROR3);
            }
            req.userId = user.id;
            next();
        });
};

