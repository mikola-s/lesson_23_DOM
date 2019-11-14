// 2.02. Дан ol. Через 3 секунды получите его последнего потомка и удалите его.

setTimeout(function () {
    $('document').ready(function () {
        $('ol li:last-child').remove()
    })
}, 3000)