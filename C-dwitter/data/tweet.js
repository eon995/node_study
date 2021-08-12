import * as userRepository from './auth.js';

let tweets = [
    {
        id: '1',
        text: '1111',
        createdAt: new Date(),
        userId: '1'
    }, {
        id: '2',
        text: '2222',
        createdAt: new Date(),
        userId: '2'
    }
];

export async function getAll() {
    return Promise.all(
        tweets.map(async (tweet) => {
            const { username, name, url } = await userRepository.findById(
                tweet.userId
            );
            const all = { tweet, username, name, url };
            console.log(all);
            return all;
        })
    );
}

export async function getAllByUsername(username) {
    return getAll().then((tweets) =>
        tweets.filter((tweet) => tweet.username === username)
    );
}

export async function getById(id) {
    const found = tweets.find((tweet) => tweet.id === id);
    if (!found) {
        return null;
    }
    const { username, name, url } = await userRepository.findById(found.userId);
    return { ...found, username, name, url }
}

export async function createTweet(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        userId
    };
    tweets = [tweet, ...tweets];
    return getById(tweet.id);
}

export async function updateTweet(id, text) {
    const tweet = tweets.find((t) => t.id === id);
    if (tweet) {
        tweet.text = text
    }
    return getById(tweet.id);
}

export async function deleteTweet(id) {
    tweets = tweets.filter((t) => t.id !== id);
}