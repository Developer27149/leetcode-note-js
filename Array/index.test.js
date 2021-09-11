import addToArrayForm from "./989.js";

test("989 test", () => {
  expect(addToArrayForm([1, 2, 0], 3)).toStrictEqual([1, 2, 3]);
  expect(addToArrayForm([1, 2, 9], 3)).toStrictEqual([1, 3, 2]);
  expect(addToArrayForm([], 3)).toStrictEqual([3]);
});
