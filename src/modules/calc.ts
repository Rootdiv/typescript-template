type calcFunc = (a: number, b: number) => number | Promise<number>;

export const multi: calcFunc = (a, b) => a * b;
export const sum: calcFunc = async (a, b) => a + b;
