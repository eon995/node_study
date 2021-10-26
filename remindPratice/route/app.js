import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: []
}));

app.use(express.json());

app.route('/posts')
    .get((req, res, next) => {
        res.status(201).send('get:/posts')
    }).post((req, res, next) => {
        res.status(201).send('post:/posts')
    });

app.listen(8080);