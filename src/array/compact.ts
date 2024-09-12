/**
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”
 * @param {Array} array - 要处理的数组
 * @returns {Array} - 新数组
 */
export function compact<T>(array: T[]): T[] {
  return array.filter(Boolean);
}
