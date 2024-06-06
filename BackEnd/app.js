import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({"Message": "Hello World"})
})

app.listen(3000)