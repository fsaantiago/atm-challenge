"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateNotes(amount) {
    const notes = [100, 50, 20, 10, 5, 2];
    let remainingAmount = amount;
    const result = {};
    for (const note of notes) {
        result[note] = Math.floor(remainingAmount / note);
        remainingAmount %= note;
    }
    return result;
}
exports.default = calculateNotes;
