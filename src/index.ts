import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const merge = require('webpack-merge');
// This is an example
/**
 * 加法
 * @param num1
 * @param num2
 * @returns
 */
const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

console.log(sum(1, 2), merge);
const a = 1;
