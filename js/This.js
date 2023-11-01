//! =====================================Ключевое слово 'This'====================================================

// Ключевое слово "this" в JavaScript указывает на объект, в контексте которого выполняется текущая функция.

// Это как своеобразный указатель на объект, который вызывает функцию.

// Для легкости понимания можно представить себе "this" как слово "этот" на английском языке. Например: Если вы находитесь в комнате и говорите: "Этот стол высокий", то вы указываете на стол, который находится в текущей комнате.

// Когда функция выполняется внутри объекта, "this" ссылается на этот объект.

//Когда функция вызывается как отдельная функция (не метод объекта), "this" может указывать на глобальный объект (например, "window" в браузере) или быть неопределенным в строгом режиме.

// "this" может быть изменено с помощью различных методов, таких как "call", "apply" и "bind".

//? Пример 1: "this" внутри объекта

// const person = {
//   name: 'John',
//   sayHello: function () {
//     console.log('Hello, ' + this.name);
//   },
// };

// person.sayHello(); // Вывод: "Hello, John"

// Здесь "this" внутри метода "sayHello" ссылается на объект "person". Когда мы вызываем метод "sayHello" у объекта "person", "this" указывает на этот объект, и мы можем получить доступ к его свойству "name".

//? Пример 2: "this" внутри объекта

// const person = {
//     name: "John",
//     age: 30,
//     introduction: function() {
//       return `Привет, меня зовут ${this.name} и мне ${this.age} лет.`;
//     }
//   };

//   console.log(person.introduction()); // Вывод: "Привет, меня зовут John и мне 30 лет."

//? Пример 3: "this" в глобальной области видимости

// function greet() {
//   console.log('Hello, ' + this.name);
// }

// const person = {
//   name: 'John',
// };

// greet(); // Вывод: "Hello, undefined"

//Здесь функция "greet" вызывается без объекта, и поэтому "this" ссылается на глобальный объект (в браузере это "window"). Поскольку у глобального объекта нет свойства "name", "this.name" вернет "undefined".

//? Пример 4: Изменение "this" с "call"

// function greet() {
//   console.log('Hello, ' + this.name);
// }

// const person = {
//   name: 'John',
// };

// greet.call(person); // Вывод: "Hello, John"

//Мы используем метод "call" для явного указания, на какой объект должно ссылаться "this" внутри функции "greet". В этом случае, "this" ссылается на объект "person".

//? Пример 5: Изменение "this" с "apply"

// function greet(name) {
//   console.log(
//     `Hello, ${name}! My favorite programming language is ${this.language}.`,
//   );
// }

// const person = {
//   name: 'Alice',
//   language: 'JavaScript',
// };

// greet.apply(person, ['Alice']); // Вывод: 'Hello, Alice! My favorite programming language is JavaScript.'

//? Пример 6: Использование "bind"

// function greet() {
//   console.log('Hello, ' + this.name);
// }

// const person = {
//   name: 'John',
// };

// const greetPerson = greet.bind(person);
// greetPerson(); // Вывод: "Hello, John"

//Метод "bind" создает новую функцию, в которой "this" привязан к указанному объекту. В данном случае, "greetPerson" будет всегда ссылаться на объект "person".

//Таким образом, "this" в JavaScript помогает определить контекст, в котором выполняется функция, и влияет на доступ к данным и поведение функций в зависимости от этого контекста.
