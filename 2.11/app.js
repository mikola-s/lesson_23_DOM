// 2.11. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.

setTimeout(function () {
    $('.www').each(function (index, elem) {
        elem.append(elem.tagName.toString().toLowerCase())
    })
}, 1000)
