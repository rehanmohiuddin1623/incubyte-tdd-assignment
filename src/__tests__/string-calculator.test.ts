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

test('returns sum of multiple comma-separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
});

test('handles new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});


test('supports custom delimiter defined at the start of the string', () => {
    expect(add("//;\n1;2")).toBe(3);
});


test('throws an exception for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('throws an exception listing all negative numbers', () => {
    expect(() => add("1,-2,-4")).toThrow("negative numbers not allowed: -2,-4");
});
