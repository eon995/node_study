import express from 'express';
const app = express();

app.get('/', (req, res, next) => {
    console.log('first');
    next();
},
    (req, res, next) => {
        console.log('first2')
        next();
    }
);



app.get('/', (req, res, next) => {
    console.log('second');
});

app.use((req, res, next) => {
    res.status(404).send('not avaliable');
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('try later, sorry')
});
app.listen(8080);

