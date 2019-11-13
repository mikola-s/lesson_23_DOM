// 1.05. Нужно взять и сделать функцию getInnerTextOfElement,
// которая принимает в качестве аргумента название например '#name'.
// То внутри делает поиск по getElementById и берет innerText и возварашает.
// НЕ МОЖНО использовать querySelector. Првоверяете аргумент. Начинается на точку или на #,
// чтобы вызвать тот метод, который вам нужен.

// добавление нескольких тегов с ID
let arr = ['tag', 'any_tag', 'some_tag', 'random_tag', 'more_tag',].map( (val, index) => {
    document.body.appendChild(document.createElement(val)).id = `tag${index}`
    document.getElementById(`tag${index}`).innerText = `тег "${val}" с ID "tag${index}"\n`
})

let str = prompt('Пользователь! \n введи ИД тега')

function getInnerTextOfElement(str) {
    return document.getElementById(str) != null ? document.getElementById(str).innerText : false
}

alert(getInnerTextOfElement(str))