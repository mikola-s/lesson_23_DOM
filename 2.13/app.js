// 2.13. Дан элемент ul, а в нем li #myunique. Вставьте перед элементом #myunique новую li с текстом '!!!'.

setTimeout(function () {
    $('#myunique').before('<li>!!!</li>')
}, 1000)
