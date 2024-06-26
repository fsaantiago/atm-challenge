"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const withdrawal_1 = __importDefault(require("./withdrawal"));
test('Calculates the minimum amount of notes for a given value', () => {
    expect((0, withdrawal_1.default)(380)).toEqual({
        100: 3,
        50: 1,
        20: 1,
        10: 1,
        5: 0,
        2: 0
    });
});
