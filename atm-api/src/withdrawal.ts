function calculateNotes(amount: number) {
    const notes = [100, 50, 20, 10, 5, 2, 1];
    let remainingAmount = amount;
    const result: { [key: number]: number } = {};

    for (const note of notes) {
        result[note] = Math.floor(remainingAmount / note);
        remainingAmount %= note;
    }

    return result;
}

export default calculateNotes;
