// 3.01. Даны ссылки. Привяжите всем ссылкам событие - каждый раз
// по наведению на ссылку в конец атрибута title запишется её текст.

title = $('head title').get(0)
let counter = 0

$("#a1").mouseover(function () {
    console.log(counter++)
    title.append(this.innerText)
})

$("#a2").mouseover(function () {
    console.log(counter++)
    title.append(this.innerText)
})

$("#a3").mouseover(function () {
    console.log(counter++)
    title.append(this.innerText)
})

$("#a4").mouseover(function () {
    console.log(counter++)
    title.append(this.innerText)
})

$("#a5").mouseover(function () {
    console.log(counter++)
    title.append(this.innerText)
})

$("#a6").mouseover(function () {
    console.log(counter++)
    title.append(this.innerText)
})

