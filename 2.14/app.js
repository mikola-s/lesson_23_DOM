// 2.14. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.

setTimeout(function () {
    $('#elem').prev().append('!')
}, 1000)
