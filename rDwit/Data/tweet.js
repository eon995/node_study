let tweets = [
    {
        id: '1',
        text: '언재 파일',
        createdAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob'
    },
    {
        id: '2',
        text: '언재2 파일',
        createdAt: Date.now().toString(),
        name: 'Eon',
        username: 'eon'
    }
];

export function getAll() {
    return tweets;
}

export function getAllByUsername(username) {
    return tweets.filter((t) => t.username == username);
}

export function getById(id) {
    return tweets.find((t) => t.id == id);
}

export function create(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        username,
        name
    };
    tweets = [tweet, ...tweets];
    return tweets;
}

export function update(id, text) {
    const tweet = tweets.find((t) => t.id == id);
    if (tweet) {
        tweet.text = text;
    }
    return tweet;
}

export function remove(id) {
    const tweet = tweets.find((t) => t.id != id);
    return tweet;
}

