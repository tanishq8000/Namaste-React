import { sum } from "../sum";

test("This should return sum of two numbers", () => {
  const res = sum(4, 3);

  expect(res).toBe(7);
});
