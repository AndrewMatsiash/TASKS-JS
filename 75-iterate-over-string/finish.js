/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

// str.split("").forEach((char) => {
//   vowels.includes(char) ? (vowelsCount += 1) : vowelsCount;
// });

// for (const char of str) {
//   vowels.includes(char) && ++vowelsCount;
// }

vowelsCount = str.match(/["aeiou"]/gi).length;
// Напишите код здесь

console.log(vowelsCount);
// 9
