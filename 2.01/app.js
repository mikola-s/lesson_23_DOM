// 2.01. Высота body 4000px; Через каждые 3 секунды плавно крутите "ползунок" вниз
// и так же через секунду вверх. И так бесконечно раз


document.body.style.height = '4000px'
let counter = 0

$('document').ready(function() {
    setInterval(function () {
        console.log(counter++)
        $("html, body").animate({ scrollTop: 4000 }, 1000)
        setTimeout(function () {
            $("html, body").animate({ scrollTop: 0 }, 1000)
        }, 1000)
    }, 3000)
})
