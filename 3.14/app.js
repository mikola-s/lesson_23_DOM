// 3.14. Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.

$(window).click(function () {
    $('ol li:last-child').remove()
})
