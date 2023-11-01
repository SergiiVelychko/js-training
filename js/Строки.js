//! ------------------------------------------------------Строки-------------------------------------------------------

// Строка - это индексированный набор из нуля или более символов, заключенных в одинарные либо двойные кавычки.

// const username = "Mango";

// Важно помнить, что индексация элементов строки начинается с нуля.
// К примеру в строке "JavaScript" буква "J" стоит на позиции с индексом 0, а "t" идет под индексом 9.

// Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана - она такая навсегда. Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

// !----------------------------------------------Конкатенация строк----------------------------------------------------

// Если применить оператор + к строке и любому другому типу данных, результатом операции «сложения» будет строка.
// Эта операция называется конкатенация, или сложение строк.

// Во время конкатенации, любой тип данных приводится к строке и сшивается со строкой,
// но есть особенность - последовательность записи операндов.

// Последовательность операций имеет значение, преобразование типов происходит только в момент операции сложения со строкой,
// до этого момента действуют привычные правила математики.

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// Посмотрим на разный порядок операндов:

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// В последнем примере произошла математическая операция сложения для первых двух чисел 1 и 2,
// после чего число 3 было преобразовано в строку "3" и сшито со строкой "4".

//! --------------------------------------------------Шаблонные строки------------------------------------------------------

// Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом.
// Шаблонная строка заключена в обратные (косые) кавычки вместо двойных или одинарных и может содержать местозаполнители,
// которые обозначаются знаком доллара и фигурными скобками - ${выражение}.

//  Используя переменные необходимо составить строку с подставленными значениями

// ---------Вариант с обычным решением задачи:

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"

//-----------Вариант решения задачи с использованием шаблонной строки c интерполяцией:

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"

//? ----------------------------------------------------Свойство length--------------------------------------------------

// Для того чтобы узнать длину строки, то есть количество её символов, у всех строк есть встроенное свойство length,
// значение которого можно получить обратившись к нему через точку после имени переменной или строкового литерала.

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47

//? ----------------------------------------Методы toLowerCase() и toUpperCase()-----------------------------------

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();
// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

//? -------------------------------------------------Метод indexOf----------------------------------------------

// Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено.

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

//? -------------------------------------------------Метод includes()----------------------------------------------

// Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае.
// Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

// const productName = "Ремонтный дроид";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроид")); // true
// console.log(productName.includes("Дроид")); // false
// console.log(productName.includes("Ремонтный")); // true
// console.log(productName.includes("ремонтный")); // false

//? -------------------------------------------------Метод endsWith---------------------------------------------------

// Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false

//? ------------------------------------------------Методы replace() и replaceAll()---------------------------------------

// Возвращают новую строку, в которой первое (replace) или все совпадения (replaceAll) подстроки заменены на указанное значение.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

//? -------------------------------------------------------Метод slice()---------------------------------------------------

// Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки. В круглых скобках метода указывается индекс с которого начинается извлечение строки и индекс, которым заканчивается извлечение. Если необходимо извлечь конкретный символ - указывается индекс этого символа и индекс следующего символа.

// const productName = 'Repair droid';

// console.log(productName.slice(0, 1)); // Выведет в консоль "R"
// console.log(productName.slice(0, 4)); // Выведет в консоль "Repa"
// console.log(productName.slice(3, 9)); // Выведет в консоль "air dr"
// console.log(productName.slice(0, productName.length)); // Выведет в консоль "Repair droid"
// console.log(productName.slice(7, productName.length)); // Выведет в консоль "droid"

//? -------------------------------------------------------Метод charAt()--------------------------------------------------

// Метод charAt() возвращает указанный символ из строки. Символ указывается по индексу (также как в массиве)

// const string = 'Дивный новый мир';
// console.log(string.charAt(0)); // Выведет в консоль букву 'Д'
