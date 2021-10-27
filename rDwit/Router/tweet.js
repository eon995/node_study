import express from 'express';
import 'express-async-errors';
import * as tweetController from '../Controller/tweet.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validate.js';




const router = express.Router();


const createValidate = [
    body('name', 'username').trim().isLength({ min: 2, max: 10 }).withMessage(' 2글자 이상 10글자 이하로 입력해주세요'),
    body('text').trim().isLength({ min: 2, max: 100 }).withMessage(' 2글자 이상 100글자 이하로 입력해주세요'),
    validate
];

const updateValidate = [body('text').trim().isLength({ min: 2, max: 100 }).withMessage(' 2글자 이상 100글자 이하로 입력해주세요'), validate];

//Get//tweets
//Get//tweets?username=username
router.get('/', tweetController.getTweets);

//Get//tweets/:id
router.get('/:id', tweetController.getTweet);

//Post//tweets
router.post('/', createValidate, tweetController.createTweet
);

//Put//tweets/:id
router.put('/:id', updateValidate, tweetController.updateTweet);

//Delete//tweets/:id
router.delete('/:id', tweetController.deleteTweet);


export default router;