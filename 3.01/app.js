// 3.01. Даны ссылки. Привяжите всем ссылкам событие - каждый раз
// по наведению на ссылку в конец атрибута title запишется её текст.

title = $('head title').get(0)

$('.url').mouseover(function () {
    title.append(this.innerText)
    console.log(title.innerText)
})



