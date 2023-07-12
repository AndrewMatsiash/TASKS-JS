/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const typeString = "promise";
console.log(typeof typeString);

const typeNumber = 1;
console.log(typeof typeNumber);

const typeBoolean = false;
console.log(typeof typeBoolean);

let typeUndefined;
console.log(typeof typeUndefined);

const typeNull = null;
console.log(typeof typeNull);

const typeArray = [1, "boolean", 2, "undefined"];
console.log(typeof typeArray);

const typeObject = {
  name: "Andrei",
  age: 20,
  smoke: false,
};
console.log(typeof typeObject);
