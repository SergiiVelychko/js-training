// ================================================Модуль 3=====================================

//----------------------- Задача 14 (подсчёт свойств объекта)

// -------------Условие

// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.
// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of

// function countProps(object) {
// Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// Change code above this line
// }

// ------------Решение

// function countProps(object) {
// Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   return propCount;
// Change code above this line
// }

//----------------------- Задача 15

// --------Условие

// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// Для получения массива ключей объекта apartment используется Object.keys()
// Для получения массива значений объекта apartment используется Object.values()

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// Change code below this line
// const keys = apartment;
// const values = apartment;

// ----------Решение

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
// Change code below this line
//   const keys = Object.keys(apartment);
//   console.log(keys);
//   const values = Object.values(apartment);
//   console.log(values);

//----------------------- Задача 16 (расходы на зарплату)

//----------- Условие

// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// Объявлена функция countTotalSalary(salaries)
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// Функция учитывает только собственные свойства объекта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   return totalSalary;
// }

// -----------Решение

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//----------------------- Задача 17

//----------- Условие

// Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];

// -----------Решение

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];

//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

//   console.log(hexColors);
//   console.log(rgbColors);

//----------------------- Задача 18 (поиск объекта по значению свойства)

//----------- Условие

// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice("Radar") возвращает 1300.
// Вызов getProductPrice("Grip") возвращает 1200.
// Вызов getProductPrice("Scanner") возвращает 2700.
// Вызов getProductPrice("Droid") возвращает 400.
// Вызов getProductPrice("Engine") возвращает null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//   }

// -----------Решение

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName) {
//     for (const product of products) {
//       if (product.name === productName) {
//         return product.price;
//       }
//     }

//     return null;
//   }

//   console.log(getProductPrice('Radar')); // 1300
//   console.log(getProductPrice('Grip')); // 1200
//   console.log(getProductPrice('Scanner')); // 2700
//   console.log(getProductPrice('Droid')); // 400
//   console.log(getProductPrice('Engine')); // null

//----------------------- Задача 19 (коллекция значений свойства)

//----------- Условие

// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getAllPropValues(propName) {

//   }

// -----------Решение

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propValues = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propValues.push(product[propName]);
//     }
//   }
//   return propValues;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

//----------------------- Задача 20 (общая стоимость товара)

//----------- Условие

// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// Объявлена функция calculateTotalPrice(productName)
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function calculateTotalPrice(productName) {

//   }

// -----------Решение

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function calculateTotalPrice(productName) {
//     let totalPrice = 0;

//     for (const product of products) {
//       if (product.name === productName) {
//         totalPrice += product.price * product.quantity;
//       }
//     }

//     return totalPrice;
//   }

//   console.log(calculateTotalPrice("Radar")); // 5200
//   console.log(calculateTotalPrice("Droid")); // 2800
//   console.log(calculateTotalPrice("Scanner")); // 8100
//   console.log(calculateTotalPrice("Grip")); // 10800
//   console.log(calculateTotalPrice("Blaster")); // 0 (продукт не найден)

//----------------------- Задача 21

//----------- Условие

// Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// Объявлена переменная highTemperatures
// Значение переменной highTemperatures это объект
// Объявлена переменная yesterday с помощью деструктуризации
// Значение переменной yesterday это число 28
// Объявлена переменная today с помощью деструктуризации
// Значение переменной today это число 26
// Объявлена переменная tomorrow с помощью деструктуризации
// Значение переменной tomorrow это число 33
// Объявлена переменная meanTemperature
// Значение переменной meanTemperature это число 29
// Используется синтаксис деструктуризации объекта highTemperatures

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };

//   const yesterday = highTemperatures.yesterday;
//   const today = highTemperatures.today;
//   const tomorrow = highTemperatures.tomorrow;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// -----------Решение
