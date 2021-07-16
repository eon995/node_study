import * as  tweetRepository from '../data/tweet.js';

export async function getTweets(req, res, next) {
    const username = req.params.username;
    const data = await (username
        ? tweetRepository.getAllByUsername(username)
        : tweetRepository.getAll());

    res.status(200).json(data);
}

export async function getTweetById(req, res, next) {
    const id = req.params.id;
    const tweet = await tweetRepository.getById(id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404);
    }
}

export async function createTweet(req, res, next) {
    const { text, name, username } = req.body;
    const tweet = await tweetRepository.createTweet(text, name, username);

    res.status(201).json(tweet);
}

export async function updateTweet(req, res, next) {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = await tweetRepository.updateTweet(id, text);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404);
    };

}

export async function deleteTweet(req, res, next) {
    const id = req.params.id;
    await tweetRepository.deleteTweet(id);

    res.sendStatus(204);
}