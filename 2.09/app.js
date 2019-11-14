// 2.09. Дан элемент #myunique. По клику на него выведите название его тега.

$('#myunique').click(function () {
    alert(`тег элемента <${this.tagName}>`)
})
