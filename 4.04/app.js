// 4.04. Сделайте функцию getDigitsSum (digit - это цифра),
// которая параметром принимает целое число и возвращает сумму его цифр.

let num = random(100000000000, 10000000000)

$('body').append(`<p>${num}<\p>`)

$('body').append(`<p>${getDigitsSum(num)}<\p>`)


function getDigitsSum(num, summ=0) {
    num.toString().split('').map((str)=>Number(str)).map((val) => summ += val)
    return summ
}


function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

