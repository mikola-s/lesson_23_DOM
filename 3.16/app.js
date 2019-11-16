// 3.16. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут и вставляйте рядом.

let count = 0
let inpt = $('input')

$('.btn').click(function () {
    inpt.clone().attr('value', 'это клон ' + ++count).insertAfter(inpt)
})