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


let pointsPerClick = [10, 8, 5, 2] // начисляемые очки за попадание

createCrutches() // костыль для фонового звука

createTarget() // создание мишени

createBirds() //создание птиц

moveDart() // движение дротика за курсором

flyDartEvent() // событие -- полет дротика

gameLoop() // обновление игры каждые 30 секунд


// обновление игры каждые 30 секунд
function gameLoop(timeSec=30){
    countDown()
    $('#result').text(0)

    setInterval(() => {
        countDown()
        $('#result').text(0)
    }, timeSec*1000)
}


// создание мишени
function createTarget() {
    for (let count = 4; count > 0; count--) { // создание мишени
        $('body').append($('<div>', {
            'class': 'rounds',
            'id': `round${count}`
        }))

        $('body').append($('<audio>', {
            'class': 'hitrounds',
            'id': `hit_round${count}`,
            'preload': 'auto',
            'src': `sounds/hit_round${count}.mp3`
        }))
    }

    $('body').append($('<audio>', { //звук промаха
        'id': 'misscatch',
        'preload': 'auto',
        'src': `sounds/misscatch.mp3`
    }))

    setRandomElementPosition(30, 80, '.rounds') // случайные движения мишени
}


// создание птиц
function createBirds() {
    for (let count = 4; count > 0; count--) {
        $('body').append($('<img>', {
            'class': 'birds',
            'id': `bird${count}`,
            'src': `imgs/bird${count}.gif`
        }))
        setRandomElementPosition(15, 85, `#bird${count}`, 1500) // случайные движения птицы
    }

    $('body').append($('<audio>', { //попадание по птице
        'id': 'hitbird',
        'preload': 'auto',
        'src': 'sounds/hit_bird.mp3'
    }))
}



// случайные движения элементов
function setRandomElementPosition(min=30, max=80, element, timeout=1500){
    setInterval(function () {
        $(element).css('left', `calc(${random(min, max)}%)`)
        $(element).css('top', `calc(${random(min, max)}%)`)
    }, timeout)
}


// костыль для фонового звука
function createCrutches() {
    let promise = $('#ground')[0].play()

    if (promise !== undefined) {
        promise
            .then(() => {console.log('Autoplay started!')})
            .catch(error => {
            $(document).one('click', () => {
                $('#ground')[0].play()
            })
        })
    }
}


// событие -- полет дротика
function flyDartEvent(){
    $(document).click((event) => {
        $(document).off('mousemove.dart') // выключпет движение дротика за курсором
        oneShot() //заменяет дротик на летящий дротик и смещает его в указанные координаты
        setTimeout(() => {
            takeAim() // отменяет oneShot() и включает движение дротика
            let hit = ($(document.elementFromPoint(event.pageX, event.pageY)).attr('id'))
            if (hit == undefined) {
                $('#misscatch')[0].play()
            } else if (hit.indexOf('bird') >= 0 || hit.indexOf('egik') >= 0 ) {
                $('#hitbird')[0].play()
            } else if (hit.indexOf('round') >= 0) {
                $('#result').text(Number($.text($('#result'))) + pointsPerClick[hit.slice(-1) - 1])
                $(`#hit_round${hit.slice(-1)}`)[0].play()
                // document.getElementById(`hit_round${hit.slice(-1)}`).play()
            }
        }, 700)
    })
}

//заменяет дротик на летящий дротик и смещает его в указанные координаты
function oneShot() {
    $('#dart').attr('src', 'imgs/dart_fly.gif')
    shiftDartImg(-27, 38)
}


// смещает дротик в указанные координаты
function shiftDartImg(shiftX, shiftY) {
    $('#dart').css('left', `${Number($('#dart').css('left').slice(0, -2)) + shiftX}px`)
    $('#dart').css('top', `${Number($('#dart').css('top').slice(0, -2)) + shiftY}px`)
}


// возвращает дротик в исходное состояние после попадания
function takeAim() {
    $('#dart').attr('src', 'imgs/dart_200x200.png')
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


// возвращает случайное целое число в диапазоне max, min включительно
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


// показывает оставшееся время текущей игры
function countDown(gameTime = 30) {
    let timer = setInterval(function () { // обратный отсчет
        if (gameTime > 0) {
            $('#countdown').text(gameTime--)
        } else {
            clearInterval(timer)
        }
    }, 1000);
}


