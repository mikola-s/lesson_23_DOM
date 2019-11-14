// 2.10. Дан элемент #myunique. По клику на него выведите название его тега в нижнем регистре.

$('#myunique').click(function () {
    alert(this.tagName.toString().toLowerCase())
})