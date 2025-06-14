import { add } from '../index';

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});
