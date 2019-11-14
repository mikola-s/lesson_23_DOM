// 1.06. Делаем функцию $(), которая может принимать аргументом название класса, айди или название просто тега.
// Если это тег, то ишем по тегу и выводим эти елементы, которые мы нашли.
// Если это айди, то ишем по айди.
// Если это класс. Тоооо, если на сайте несколько таких класов, возварашаем как массив елементов,
// который нашли, если только один клас, то возвараем просто один елемент не в массиве!

// добавление нескольких тегов с ID
let arr = ['tag', 'any_tag', 'some_tag', 'random_tag', 'more_tag',]

arr.map((val, index) => {
    document.body.appendChild(document.createElement(val)).id = `id${index}`
    document.getElementById(`id${index}`).className = `class${index}`
    document.getElementById(`id${index}`).innerText = `тег "${val}" с ID "id${index}" и классом class${index}\n`
})

let arg = prompt('Пользователь! \n ' +
    'введи имя класса (пример: ".class1") \n ' +
    'айди тега (пример: "#id1") ' +
    'или тега (пример: "div")')

// let arg = '#id1'

let result = $.ready(function () {
    let len = $(arg).get().length
    if (len > 0) {
        if (len == 1) {
            console.log($(arg).get(0))
        } else {
            if (arg.startsWith('.')) {
                console.log($(arg))
            } else {
                for (let index = 0; index < len; index++) {
                    console.log($(arg).get(index))
                }
            }
        }
        alert('результат в console.log')
    } else {
        alert('нет такого элемента')
    }
})

