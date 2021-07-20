import express from 'express';
import 'express-async-errors';

import * as authController from '../controller/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';

const router = express.Router();
const validateAuthName = [
    body('name')
        .trim()
        .isLength({ min: 2 })
        .withMessage('2자이상 입력해주세요.'),

    validate
];

router.post('/signup', authController.createMember);

router.post('/login', authController.loginMember);

router.get('./me');

export default router;
