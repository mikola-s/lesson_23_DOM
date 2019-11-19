// 5.01. Сделать дартс.
// Всё так же как мы и делали на уроке.
// С 4 кругами. 1 - красный, 2 - синий, 3 - жёлтый, 4 - зелёный.
// - 1 красный самый маленький - 40x40;
// - 2 синий - 80x80;
// - 3 жёлтый - 160x160;
// - 4 зелёный - 320x320;
// Я думаю все понимают как выглядит darts:
// - https://cdn1.ozone.ru/multimedia/c2400/1014684405.jpg
// При попадании по 1 кругу 10 очков, 2 - 8 очков, 3 - 5 очков, 4 - 2 очка
// Так же при нажатии картинка должно меняться на эту гифку(gif-1)
// и должно пройти ровно 800 милисекунд до попадания, чтобы посчитало очко.
// - gif-1: http://hddfhm.com/images/animated-clipart-darts-9.gif (якобы дротик летает)
// И так же у нас ограниченное время игры. 30 секунд. Через 30 секунд игра заканчивается
// и мы просто играем заново(с нуля)
// Дополительно(обязательно) - сделать, чтобы вокруг летали птицы рандомно.
// Можно сделать, чтобы пели (будет плюсиком)
// 4 - птицы в gif формате. размерами 30x30, 30x30, 40x40, 50x50
// И так же подключить музыку, чтобы играло на фоне.
// И так же при попадании на разные круги были разные звуки по дереву
// или же того, что вы придумаете.(В пределах разумного)


let pointsPerClick = [10, 8, 5, 2]

for (let count = 4; count > 0; count--) { // создание мишени
    $('body').append($('<div>', {'class': 'rounds', 'id': `round${count}`}))
}


moveDart() // движение дротика за курсором


//заменяет дротик на летящий дротик и смещает его в указанные координаты
function oneShot() {
    $('#dart').attr('src', 'dart_fly.gif')
    shiftDartImg(-27, 38)
}

// смещает дротик в указанные координаты
function shiftDartImg(shiftX, shiftY) {
    $('#dart').css('left', `${Number($('#dart').css('left').slice(0, -2)) + shiftX}px`)
    $('#dart').css('top', `${Number($('#dart').css('top').slice(0, -2)) + shiftY}px`)
}

// возвращает дротик в исходное состояние после попадания
function takeAim() {
    $('#dart').attr('src', 'dart_200x200.png')
    moveDart()
}

// создает/возобновляет движение дротика за курсором
function moveDart() {
    shiftDartImg(27, -38)
    $(document).on('mousemove.dart', (event) => { //движение дротика за курсором
        $('#dart').css('top', `${event.clientY - 100}px`)
        $('#dart').css('left', `${event.clientX}px`)
    })
}

// возвтращает случайное целое число в диапазоне max, min включительно
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// запуск дротика
$(document).click((event) => {
    $(document).off('mousemove.dart')
    oneShot()
    setTimeout(() => {
        takeAim()
        // $.playSound('')
        let hit = ($(document.elementFromPoint(event.pageX, event.pageY)).attr('id'))
        if (hit != undefined && hit.indexOf('round') >= 0) {
            $('#result').text(Number($.text($('#result'))) + pointsPerClick[hit.slice(-1) - 1])
        }
    }, 700)
})


// случайные движения мишени
setInterval(function () {
    $('.rounds').css('left', `calc(${random(30, 80)}%)`)
    $('.rounds').css('top', `calc(${random(30, 70)}%)`)
}, 1500)


let gameTime = 30;


let timer = setInterval(function () {
    gameTime -= 1
    if (gameTime <= 0) {
        clearInterval(timer);
        //counter ended, do something here
        return
    }
    $('#countdown').text(gameTime)
}, 1000); //1000 will  run it every 1 second


setTimeout(() => location.reload(), 30000)