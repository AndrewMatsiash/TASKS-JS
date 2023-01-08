/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3];

// Напишите код здесь
//option 1
// const b = [...a];

//option 2
// const b = JSON.parse(JSON.stringify(a));

//option 3
const b = structuredClone(a);
b.push("newElement");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "newElement"]
