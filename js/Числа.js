// !---------------------------------------------------Числа----------------------------------------------------------------

// Все числа в JS, как целые так и дробные, имеют тип Number и записывать их можно не только в десятичной системе счисления.

// Большинство арифметических операций и математических функций преобразуют значение в число автоматически.
// Для того чтобы сделать это явно, используйте функцию Number(val), передавая ей в val то, что надо привести к числу.

// Если значение не возможно привести к числу, результатом будет специальное числовое значение NaN (Not a Number).
// Аналогичным образом происходит преобразование и в других математических операторах и функциях.

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

//? -----------------------------------------------Метод Number.parseInt()-----------------------------------------------

// Метод Number.parseInt() преобразует строку в  целое число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

//? -----------------------------------------------Метод Number.parseFloat()-----------------------------------------------

// Метод Number.parseFloat() парсит из строки дробное число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN

//? ------------------------------------------------Метод Number.isNaN()------------------------------------------------

// Для проверки на число можно использовать метод Number.isNaN(val).
// Он проверяет, является ли указанное значение NaN или нет.
// Метод отвечает на вопрос "Это Not A Number?" и возвращает:

// true - если значение val это NaN
// false - если значение val это не NaN
// Для всех значений val кроме NaN, при передаче в Number.isNaN(val) вернёт false.
// Этот метод не производит попытку преобразовать val к числу, а просто выполняет проверку на NaN.

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

//? -------------------------------------------------Метод toFixed---------------------------------------------

// Метод toFixed() - это метод JavaScript, который применяется к числовым значениям (числам с плавающей запятой) и используется для форматирования числа с фиксированным числом знаков после десятичной точки (точки с плавающей запятой) и возвращает строку.

// number.toFixed(digits)
// number - число, которое нужно форматировать.
// digits - количество знаков после десятичной точки, которое вы хотите сохранить в результирующей строке.
// Это должно быть целым числом от 0 до 20.

// const number = 123.4567;
// const formatted = number.toFixed(2);

// console.log(formatted); // Вывод: "123.46"

//? --------------------------------------------------Метод toString()---------------------------------------------

// Метод toString() возвращает строковое представление указанного объекта Number.

// const number = 10;
// console.log(number.toString()); // Выведет '10'

// ?---------------------------------------------------Класс Math-----------------------------------------------------

// Данный класс является встроенным и предоставляет набор методов для работы с числами.

// Math.floor(num) - возвращает наибольшее целое число,
// меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - возвращает наименьшее целое число,
// большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - возвращает значение числа,
// округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10
