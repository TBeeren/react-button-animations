export const range = (n: number) => Array.from(Array(n).keys())

export const sample = (arr: Array<any>) =>
  arr[Math.floor(Math.random() * arr.length)]

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

export const sum = (values: Array<number>) =>
  values.reduce((sum, value) => sum + value, 0)
export const mean = (values: Array<number>) => sum(values) / values.length

export const clamp = (val: number, min = 0, max = 1) =>
  Math.max(min, Math.min(max, val))
