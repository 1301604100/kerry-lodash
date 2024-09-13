/**
 * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param {Array} array - 要拆分的数组
 * @param {number} size - 每个数组区块的长度
 * @returns {Array} - 拆分后的数组
 */
export default function chunk<T>(array: T[], size: number = 1): T[][] {
  const res: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));
  }
  return res;
}
