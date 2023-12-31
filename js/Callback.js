// ===========================================Callback функции======================================

// Функции не отличаются от чисел, строк или массивов - это просто специальный тип данных (объект высшего порядка), значение, которое можно хранить в переменной или передавать как аргумент в другую функцию.

// Функция обратного вызова (callback, колбэк) - это функция, которая передаётся другой функции в качестве аргумента и та, в свою очередь, вызывает переданную функцию.

// Функция высшего порядка(higher order function) - функция, принимающая в качестве параметров другие функции или возвращающая функцию как результат.

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать, ${name}.`);
// }

// Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внури функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

// ----------------------------------------------Инлайн колбэки-----------------------------------

// Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую передаём колбэк. Такая функция будет доступна только как значение параметра и больше нигде в коде.

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// ------------------------------------------------Несколько колбэков----------------------------------------------

// Функция может принимать произвольное количество колбэков. Например, представим что мы пишем логику принятия звонков для телефона. Программа должна включить автоответчик если абонент недоступен, или соединить звонок в противном случае. Доступность абонента будем имитировать генератором случайного числа, чтобы между разными вызовами функции можно было получить различные результаты.

// function processCall(recipient) {
// Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
// Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
// Логика принятия звонка
//   }
// }

// processCall('Манго');

// Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.

// function processCall(recipient, onAvailable, onNotAvailable) {
// Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }

//     onAvailable(recipient);
//   }

//   function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
// Логика принятия звонка
//   }

//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
// Логика активации автоответчика
//   }

//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
// Логика записи голограммы
//   }

//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Поли", takeCall, leaveHoloMessage);

// Колбэки применяются для обработки действий пользователя на странице, при обработке запросов на сервер, выполнения заранее неизвестных функций и т. п. В этом и заключается их суть - это функции предназначенные для отложенного выполнения.
