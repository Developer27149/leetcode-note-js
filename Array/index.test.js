import shortestToChar from "./821.js";
import addToArrayForm from "./989.js";

test("989 test", () => {
  expect(addToArrayForm([1, 2, 0], 3)).toStrictEqual([1, 2, 3]);
  expect(addToArrayForm([1, 2, 9], 3)).toStrictEqual([1, 3, 2]);
  expect(addToArrayForm([], 3)).toStrictEqual([3]);
});

test("821 test", () => {
  expect(shortestToChar("loveleetcode", "e")).toStrictEqual([
    3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0,
  ]);
});
