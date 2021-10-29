import express from 'express';
import 'express-async-errors';
import * as authController from '../Controller/auth.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';



const router = express.Router();

router.post('/test', authController.test);

// router.get('/me', authController.me);

// router.post('/login', authController.login);

// router.post('/signup', authController.signup);

export default router;


