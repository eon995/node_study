import express from 'express';
import { body, validationResult, param } from 'express-validator';

const app = express();
app.use(express.json());




app.post(
    '/users',
    body('name').notEmpty().withMessage('이름을 입력하세요').isLength({ min: 2 }).withMessage(' 2글자 이상 입력해주세요'),
    (req, res, next) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res
                .status(400)
                .json({ message: errors.array() });
        };

        console.log(req.body);

        res.sendStatus(201);
    }
);

app.get('/:email', param('email').isEmail().withMessage('email 을 입력하세요'), (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res
            .status(400)
            .json({ message: errors.array() });
    };

    console.log(req.body);

    res.sendStatus(201);
});



app.listen(8080);