import { chunk, compact, concat, difference } from "../array";

test("chunk", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toStrictEqual([[1, 2], [3, 4], [5]]);
  expect(chunk([1, 2, 3, 4, 5], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5],
  ]);
  expect(chunk([1, 2, 3, 4, 5])).toStrictEqual([[1], [2], [3], [4], [5]]);
});

test("compact", () => {
  expect(compact([0, 1, false, 2, "", 3, NaN])).toStrictEqual([1, 2, 3]);
});

test("concat", () => {
  expect(concat([1], 2, [3], [[4]])).toStrictEqual([1, 2, 3, [4]]);
});

test("difference", () => {
  expect(difference([3, 2, 1], [4, 2])).toStrictEqual([3, 1]);
  expect(difference([3, 2, 1, NaN], [4, 2, NaN])).toStrictEqual([3, 1]);
});
