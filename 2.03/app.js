// 2.03. Проверка на номер.
// Создать input и каждый раз, когда пользователь печатает текст.
// Проверять на то, что внутри input только число.
// Если там только число, то светить текст зеленым, если не только число, то светить красным.
// PS. color: red, green | Проверять через setInterval

$('body').append('<input>')
let input = $('input').get(0)

input.onkeyup = function () {
    input.style.color = isNaN(input.value) ? 'red' : 'green'
}

