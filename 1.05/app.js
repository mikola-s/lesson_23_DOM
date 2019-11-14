// 1.05. Нужно взять и сделать функцию getInnerTextOfElement,
// которая принимает в качестве аргумента название например '#name'.
// То внутри делает поиск по getElementById и берет innerText и возварашает.
// НЕ МОЖНО использовать querySelector. Првоверяете аргумент. Начинается на точку или на #,
// чтобы вызвать тот метод, который вам нужен.

// добавление нескольких тегов с ID
let arr = ['tag', 'any_tag', 'some_tag', 'random_tag', 'more_tag',].map( (val, index) => {
    document.body.appendChild(document.createElement(val)).id = `tag${index}`
    document.getElementById(`tag${index}`).className = `class${index}`
    document.getElementById(`tag${index}`).innerText = `тег "${val}" с ID "tag${index}" и классом class${index}\n`
})

let argument = prompt('Пользователь! \n введи аргумент например \'#name\' или \'.name\'')

function getInnerTextOfElement(arg) {
    if (arg != null) {
        if (document.getElementById(arg.slice(1)) != null && arg.startsWith('#')) {
            return `текст элемента с ИД "${arg}" \n 
            ${document.getElementById(arg.slice(1)).innerText}`
        } else if (document.getElementsByClassName(arg.slice(1)) != null && arg.startsWith('.')) {
            return `текст первого элемента с классом "${arg}" \n 
            ${document.getElementsByClassName(arg.slice(1))[0].innerText}`
        }
        return `"${arg}" нет такого элемента`
    }
}

alert(getInnerTextOfElement(argument))