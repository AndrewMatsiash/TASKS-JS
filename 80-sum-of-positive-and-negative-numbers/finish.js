/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Создайте функцию "sumPositiveNegative" здесь

const sumPositiveNegative = (arr) => {
  return arr.reduce(
    (acc, num) => {
      if (num >= 0) {
        return { ...acc, positive: acc.positive + num };
      }
      return { ...acc, negative: acc.negative + num };
    },
    {
      positive: 0,
      negative: 0,
    }
  );
};

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
