import express from 'express';
import 'express-async-errors';


const router = express.Router();

let tweets = [
    {
        id: '1',
        text: '1111',
        createdAt: new Date(),
        name: 'bob',
        username: 'bob'
    }, {
        id: '2',
        text: '2222',
        createdAt: new Date(),
        name: 'bib',
        username: 'bib'
    }
];

router
    .route('/')
    .get((req, res, next) => {
        const username = req.query.username;
        const data = username
            ? tweets.filter((t) => t.username === username)
            : tweets;

        res.status(200).json(data);
    })
    .post((req, res, next) => {
        const { text, name, username } = req.body;
        const createTweet =
        {
            id: new Date(),
            text,
            createdAt: new Date(),
            name,
            username,

        };
        tweets = [createTweet, ...tweets];
        res.status(201).json(createTweet);
    });

router
    .route('/:id')
    .get((req, res, next) => {
        const id = req.params.id;
        const tweet = tweets.find((t) => t.id === id);
        if (tweet) {
            res.status(200).json(tweet);
        } else {
            res.status(404);
        };
    })
    .put((req, res, next) => {
        const id = req.params.id;
        const text = req.body.text;
        const tweet = tweets.find((t) => t.id === id);
        if (tweet) {
            tweet.text = text;
            res.status(200).json(tweet);
        } else {
            res.status(404);
        };

    })
    .delete((req, res, next) => {
        for (let i = 0; i < tweets.length; i++) {
            if (req.params.id == tweets[i].id) {
                tweets.splice(i, 1);
            };
            res.send(tweets);
        };
    });



// app.get(`/tweets?username=${username}`, (req, res, next) => {
// res.status(201).send('GET: tweets'); });
export default router;
