// 1.04. Делаем функцию, которая принимает в качестве аргумента
// id тега и если этого тега нету внутри body, то возврашает,
// что нельзя удалить этот тег, потому что в вёрстке этого тега нету.
// Если этот тег в вёрстке, то удаляет

// добавление нескольких тегов с ID
let arr = new Array(5).fill(1).map( (_, index) => {
    document.body.appendChild(document.createElement("some_tag")).id = `tag${index}`
    document.getElementById(`tag${index}`).innerText = `блок с ID tag${index}\n`
})

let tag_name = prompt('Пользователь! \n введи название ИД тега')

document.getElementById(tag_name).remove()