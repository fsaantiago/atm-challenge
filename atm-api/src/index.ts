import express from 'express';
import calculateNotes from './withdrawal';

const app = express();
const port = 5000;

app.use(express.json());
app.post('/api/saque', (req, res) => {
    const { value } = req.body;

    if (Number.isInteger(value) && value > 0) {
        const notes = calculateNotes(value);
        res.json(notes);
    } else {
        res.status(400).send({ error: 'Invalid value. Please, inform a positive integer value.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
