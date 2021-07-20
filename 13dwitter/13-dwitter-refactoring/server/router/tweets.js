import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';
import { body } from 'express-validator';
import { validate } from '../middleware/validator.js';
const router = express.Router();

const validateTweetText = [
    body('text')
        .trim()
        .isLength({ min: 2 })
        .withMessage('2자이상 입력해주세요'),
    validate
];

// GET /tweets GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);

// POST /tweeets
router.post('/', validateTweetText, tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', validateTweetText, tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;
