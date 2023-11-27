// const title = document.querySelector('.js-title')
// console.dir(title)
// const list = document.querySelector('.js-list')
// console.log(list)
// console.dir(list.children)
// console.log([...list.children])

//*---------------------------------------- Возможность изменить текст внутри тега указанного элемента

// const title = document.querySelector('.js-title')
// console.dir(title)
// title.textContent='Hello JS'

//* ----------------------------------------Добавление и удаление классов стиля

// Метод classList

// title.classList.add('title-color')// Добавляем класс в список классов classList
// title.classList.remove('title-color')// Удаляем класс из списка классов classList
// title.classList.toggle('title-color')// Добавляем класс, если его нет и удаляем - если он есть в списке классов classList

// Метод style

// title.style.fontSize = '100px'
// title.style.color = 'green'

//* ----------------------------------------Добавляем элемент li в уже существующий список

// Метод createElement

// const li = document.createElement('li')
// li.textContent = list.children.length + 1
// li.classList.add('title-color')
// list.append(li)
// console.log(li)

// Метод шаблонной строки

// const li = `<li class='title-color'>${list.children.length + 1}</li>`
// list.insertAdjacentHTML("beforeend", li)// Добавляем внутрь списка ul, в самый конец (наиболее распространенная позиция)
// console.log(li)

// list.insertAdjacentHTML("afterbegin", li)// Добавляем внутрь списка ul, в самое начало
// list.insertAdjacentHTML("beforebegin", li)// Добавляем перед списком ul
// list.insertAdjacentHTML("afterend", li)// Добавляем после списка ul

//* ------------------------------------------Статические и динамические массивы

// const list = document.querySelector('.js-list')

// Статический массив (неживая коллекция)

// const listStatic = document.querySelectorAll('li')
// console.log('list Static', listStatic)

// Динамический массив (живая коллекция)

// const listDynamics = document.getElementsByTagName('li')
// console.log('list Dynamics', listDynamics)

// -------------------------------------

// const button = document.querySelector('.js-click');
// const container = document.querySelector('.js-container');
// console.log(button);
// button.addEventListener('click', onClick);
// container.addEventListener('click', onClick);

// let step = 0;

// function onClick(evt) {
//     step += 5;
//     container.style.marginLeft = `${step}px`;
//     container.style.marginTop = `${step}px`;
//     console.log(evt.currentTarget);
// }
// -------------------------------------------

    // const title = document.querySelector('.js-title')
    // console.log(title)
    // title.addEventListener('click', onClick)

    // function onClick(evt) {
    //     console.log(evt.currentTarget)
    //     const str = title.textContent.slice(0, 17)
    //     const remainder = title.textContent.slice(17)
    //     console.log(str)
    //     console.log(remainder)
// }
    
// --------------------------------------------------------

// const elem = document.querySelector('#elem')
// console.log(elem.value)
// const value = elem.getAttribute('value')
// console.log(value)

// const elem = document.querySelector('#elem')
// console.log(elem.class)
// const class = elem.getAttribute('class')
// console.log(class)
// -----------------------------------------------------
// const elem1 = document.querySelector('#elem1')
// const elem2 = document.querySelector('#elem2')
// const elem3 = document.querySelector('#elem3')
// console.log(elem1.textContent)
// console.log(elem2.textContent)
// console.log(elem3.textContent)
// ------------------------------------------------
// Получите ссылку на первый абзац из дива с id, равным block.

// const block = document.querySelector('#block p')
// console.log(block)
// const paragraph1 = block.
// ---------------------------------------------------

// const www = document.querySelector('.www textContent')
// console.log(www)
// ------------------------------------------------------

// const button1 = document.querySelector('#button1')
// const button2 = document.querySelector('#button2')
// const button3 = document.querySelector('#button3')

// button1.addEventListener('click', onClick1)
// button2.addEventListener('click', onClick2)
// button3.addEventListener('click', onClick3)

// function onClick1(){
//     console.log('1')
// }
// function onClick2(){
//     console.log('2')
// }
// function onClick3(){
//     console.log('3')
// }
// ---------------------------------------------------------------

// const button1 = document.querySelector('#button1')
// const button2 = document.querySelector('#button2')

// button1.addEventListener('click', func1)
// button2.addEventListener('click', func2)

// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
// ------------------------------------------------------------------

// const elem1 = document.querySelector('#elem1')
// const elem2 = document.querySelector('#elem2')
// const elem3 = document.querySelector('#elem3')
// const elem4 = document.querySelector('#elem4')
// const elem5 = document.querySelector('#elem5')

// elem1.addEventListener('click', func)
// elem2.addEventListener('click', func)
// elem3.addEventListener('click', func)
// elem4.addEventListener('click', func)
// elem5.addEventListener('click', func)

// function func() {
// 	console.log('message');
// }
// ------------------------------------------------------------------------------------

// const elem = document.querySelector('#elem')
// elem.addEventListener('click', func1)
// elem.addEventListener('click', func2)
// elem.addEventListener('click', func3)

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }
// ---------------------------------------------------

const paragraph1 = document.querySelector('#paragraph1')
const paragraph2 = document.querySelector('#paragraph2')
const button = document.querySelector('#button')
const result = parseFloat(paragraph1.textContent) + parseFloat(paragraph2.textContent)
button.addEventListener('click', summa)

function summa() {
    console.log(result)
}
----------------------------------------------------

