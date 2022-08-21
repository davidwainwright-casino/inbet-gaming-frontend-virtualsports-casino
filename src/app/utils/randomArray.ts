export const randomArray = (length: number, max: number): number[] =>
  Array(length)
    .fill(null)
    .map(() => Math.round(Math.random() * max));
