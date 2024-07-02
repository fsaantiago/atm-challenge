import calculateNotes from './withdrawal';

test('Calculates the minimum amount of notes for a given value', () => {
    expect(calculateNotes(380)).toEqual({
        100: 3,
        50: 1,
        20: 1,
        10: 1,
        5: 0,
        2: 0,
        1: 0
    });
});
