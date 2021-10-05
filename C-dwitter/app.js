import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import tweetsRouter from './router/tweet.js';
import 'express-async-errors';
import authRouter from './router/auth.js';
import dotenv from 'dotenv';



const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
    res.status(404);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

app.listen(8080);
