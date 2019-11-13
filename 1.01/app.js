// 1.01. Создайте сами в html Картинку img с айди myimg. Потом уже в js Сделать 2 prompt.
// Где вы будете спрашивать у человека ссылку на картинку. И так же на сколько градусов повернуть.
// Проверяете, чтобы в первом промте была ссылка. А во втором было только число.
// И вставялете пять раз картину с одним и тем же рисунком и каждый раз крутите эту картинку
// на тот градус, что указали в промт.
// Например ввёл человек 45, то первая картинка с поворотом на 45,
// вторая на 90, 3 - 135 и т.д.
// <img id=myimg src=ssilkaNaImgIzPrompt style=(vspomnite kak krutit v css)>
// PS. rotate...

let default_url = 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjJqf7b_eblAhVqlIsKHXxkBJ4QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.imglobal.com%2Fmember&psig=AOvVaw1VYB33i65pPLpC00Yje33Q&ust=1573727393985385'

function checkURL(url) { // это решение из инета
    let regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
    return regURL.test(url);
}

function enterUrl() {
    let url //= 'http://lviv.samopomich.ua/wp-content/uploads/2016/12/anime-art-artist-beautiful-Favim.com-3609035-1.jpg'
    while (!checkURL(url) || url == undefined){
        url = prompt('Пользователь! \n введи урл картинки')
    }
    return url
}

function getDeltaDegree () {
    let deltaDegree
    while (deltaDegree == undefined || isNaN(deltaDegree) || deltaDegree == '') {
        deltaDegree = prompt('Пользователь! \n введи угол поворота картинки')
    }
    return deltaDegree
}

myimg.className = 'images'
myimg.src = enterUrl()
skew = getDeltaDegree()

let image
for (let item = 1; item < 6; item++) {
    image = myimg.cloneNode(false)
    image.id = `image${item}`
    image.style.transform = `rotate(${skew * item}deg)`
    document.body.appendChild(image)
}

