// 3.10. Дан элемент #myunique. Удалите у него класс www вместо с атрибутом при нажатии.

$('#myunique').click( function() {$(this).removeAttr('class')})