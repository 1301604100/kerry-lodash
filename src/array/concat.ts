/**
 * 创建一个新数组，将array与任何数组 或 值连接在一起。
 * @param {Array} array
 * @returns {Array} 新数组
 */
export default function concat(array: any[], ...values: any[] | any): any[] {
  return array.concat(...values);
}
