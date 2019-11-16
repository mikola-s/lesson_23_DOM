// 3.18. Дан элемент #myunique.
// По клику на него увеличьте его ширину и высоту и шрифт в 2 раза.
// Делайте это анимировано

$('#myunique').click( function () {
    $(this).animate({
        width: `+=${$(this).css('width')}`,
        height: `+=${$(this).css('height')}`,
        "font-size": `+=${$(this).css('font-size')}`
    }, 1000)
})
