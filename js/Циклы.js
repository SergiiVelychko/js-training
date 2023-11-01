// ---------------------------------------------// Цикл for ---------------------------------

// for(initialization, condition, post-expression)

// initialization - объявление переменной в цикле и обозначение её значения.
// condition - условие выполнения цикла (цикл будет выполняться до тех пор, пока это условие будет выполняться).
// post-expression - шаг цикла.

// Этот цикл применяется тогда когда нужен доступ к индексам строки или массива.
// Этот цикл позволяет перебирать массив слева-направо, справа-налево, с любого индекса.
// В отличии от (Цикла for of), данный цикл позволяет выполнить несколько итераций (итерацией называется однократное выполнение полного цикла).

// Пример 1

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// Пример 2

// let arr = ['Ваня', 'Иштван', 'Оля'];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// Пример 3

// let arr = [5, 7, 3, 8, 9, 'stroka'];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i += 1) {
//   console.log('Элемент' + (i + 1) + ' Индекс' + i + ': ' + 'значение ' + arr[i],
//   );
// }

// Пример 4

// let arr = [5, 7, 3, 8, 9, 91];
// for (let i = 0; i < arr.length; i += 1) {
//   arr[i] *= 2;
//   console.log(
//     'Элемент' + (i + 1) + ' Индекс' + i + ': ' + 'значение ' + arr[i],
//   );
// }

// Пример 5

// В данном примере применяется оператор break. Он позволяет прекратить работу цикла при определенных условиях, даже если эти условия противоречат начальным условиям.

// for (let i = 10; i <= 20; i += 2) {
//   if (i > 15) break;
//   console.log(i);
// }

// Пример 6

// В данном примере применяется оператор continue. При определенных условиях, он позволяет пропустить итерацию цикла и перейти к следующей итерации.

// for (let i = 10; i <= 20; i += 1) {
//   if (i % 2 === 0) continue;
//   console.log(i);
// }

// ---------------------------------------------// Цикл for of -----------------------------

// Этот цикл применяется тогда когда нужно работать со значениями (а не с индексами) массива.
// В отличи от (Цикла for), этот цикл позволяет перебирать массив только с начала и до конца.
// В отличии от (Цикла for), данный цикл позволяет выполнить только одну итерацию (итерацией называется однократное выполнение полного цикла).
// В случае, если нужно просто перебрать значения строки или массива - этот цикл предпочтительней.

// Пример 1

// const arr = [1, 2, 3, 4, 5];
// for (const element of arr) {
//   console.log(element);
// }

// Пример 2

// let arr = ['Ваня', 'Иштван', 'Оля'];
// console.log(arr.length);
// let arr = ['Ваня', 'Иштван', 'Оля'];
// for (let arrItem of arr) {
//   console.log(arrItem);
// }

// ------------------------------------------------Цикл While-------------------------------------------------

// Пример 1

// let j = 0;
// while (j < 10) {
//   console.log(j);
//   j += 1;
// }

// Пример 2

// let j = 1000;
// while (j >= 100) {
//   console.log(j);
//   j -= 100;
// }
