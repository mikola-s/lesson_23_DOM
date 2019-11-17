// 4.02. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
// И так, пока сумма не станет однозначным числом (9 и менее).

let num = random(10000000000, 1000000000)
let arr
let summ


$('body').append(`<p>${num}<\p>`)


do {
    summ = 0
    arr = inArray(num).map((val) => summ += val)
    $('body').append(`<p>${summ}<\p>`)
    num = summ
} while (num > 9)


function inArray(value) {
    return value.toString().split('').map((str)=> Number(str))
}


function random(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}



