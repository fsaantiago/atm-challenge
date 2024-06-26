"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const withdrawal_1 = __importDefault(require("./withdrawal"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.post('/api/saque', (req, res) => {
    const { value } = req.body;
    if (Number.isInteger(value) && value > 0) {
        const notes = (0, withdrawal_1.default)(value);
        res.json(notes);
    }
    else {
        res.status(400).send({ error: 'Invalid value. Please, inform a positive integer value.' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
