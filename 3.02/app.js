// 3.02. 5 ссылок. Привяжите всем ссылкам событие онклик - 
// по клику на ссылку в конец ее текста дописывается ее href в круглых скобках. 
// Внутри href должно быть по умолчанию https://google.com


$('a').click(function () {
    this.append(`(${$(this).attr("href")})`)
})

