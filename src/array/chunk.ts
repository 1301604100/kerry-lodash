export function chunk<T>(array: T[], size: number = 1): T[][] {
  if (!Array.isArray(array)) throw new Error("array is not an array");

  const res: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));
  }
  return res;
}
