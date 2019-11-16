// 3.12. Дан элемент #myunique. Узнайте количество его классов при нажатии и вставялйте в innerText.

$('#myunique').click( function() {
    $(this).text(`количество классов ${$(this).attr('class').split(/\s+/).length}`)
})

