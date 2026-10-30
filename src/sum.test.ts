import { sum } from "./sum.js";

test("sum of 3 + 7 must be 10", () => {
  const result = sum(3, 7);

  expect(result).toBe(10);
});
