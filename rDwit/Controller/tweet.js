import * as tweetRepository from '../Data/tweet.js';

export async function getTweets(req, res) {
    const username = req.query.username;
    const data = tweetRepository.getAllByUsername(username);
    if (username) {
        res.status(200).json(data);
    } else {
        res.status(200).json(tweetRepository.getAll());
    }

}

export async function getTweet(req, res) {
    const id = req.params.id;
    const tweet = tweetRepository.getById(id);

    console.log(Id);
    if (tweet) {
        return res.status(200).json(tweet);
    }
    return res.status(400).json({ message: " id not found" })
}

export async function createTweet(req, res) {
    const userId = req.userId;
    const { text, name, username } = req.body;
    const tweet = tweetRepository.create(text, name, username, userId);
    res.status(201).json(tweet);
}

export async function updateTweet(req, res) {
    const text = req.body.text;
    const id = req.params.id;

    const tweet = tweetRepository.update(id, text);

    res.status(201).json(tweet);
}

export async function deleteTweet(req, res) {
    const id = req.params.id;
    tweetRepository.remove(id);
    res.sendStatus(204);
}

