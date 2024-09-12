import { chunk, compact } from "../array";

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
