import { add } from '../index';

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself if only one number is provided', () => {
    expect(add("1")).toBe(1);
});

test('returns sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});