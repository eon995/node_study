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

export async function getAll() {
    return tweets
}

export async function getAllByUsername(username) {
    return tweets.filter((t) => t.username === username);
}

export async function getById(id) {
    return tweets.find((t) => t.id === id);
}

export async function createTweet(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username
    };
    tweets = [tweet, ...tweets];
    return tweet;
}

export async function updateTweet(id, text) {
    const tweet = tweets.find((t) => t.id === id);
    if (tweet) {
        tweet.text = text
    }
    return tweet;
}

export async function deleteTweet(id) {
    tweets = tweets.filter((t) => t.id !== id);
}