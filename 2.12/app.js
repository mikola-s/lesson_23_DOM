// 2.12. Дан ol. Вставьте ему в конец li с текстом 'HELLO WORLD!'.


setTimeout(function () {
    $('ol li').each(function (_, elem) {
        elem.append(' HELLO WORLD!')
    })
}, 1000)
