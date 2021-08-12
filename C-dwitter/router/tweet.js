import express from 'express';
import 'express-async-errors';
import { isAuth } from '../middleware/auth.js';


import * as tweetController from '../controller/tweet.js';


const router = express.Router();


router
    .route('/')
    .get(tweetController.getTweets)
    .post(isAuth, tweetController.createTweet);

router
    .route('/:id')
    .get(isAuth, tweetController.getTweetById)
    .put(isAuth, tweetController.updateTweet)
    .delete(isAuth, tweetController.deleteTweet);



export default router;
