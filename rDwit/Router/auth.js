import express from 'express';
import 'express-async-errors';
import * as authController from '../Controller/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';



const router = express.Router();

const signupValidate =
    [
        body('id').notEmpty().trim().isLength({ min: 2, max: 10 }).withMessage("2글자이상 10글자이하로 입력해주세요").matches(/^[a-z0-9_-]/).withMessage("소문자 영문 및 숫자만 사용해주세요."),
        validate
    ];


const idRange = /[^a-z0-9]/g;

router.post('/test', authController.test);

// router.get('/me', authController.me);

// router.post('/login', authController.createAccount);

router.post('/signup', signupValidate, authController.createAccount);




export function checkId(req, res, next) {
    const id = /[^a-z0-9]/g;
    const check = id.exec(req);

    if (check) {
        return res.status(400).withmessage("영문과 숫자만 사용가능합니다.");

    }
    return next();

}


export default router;


