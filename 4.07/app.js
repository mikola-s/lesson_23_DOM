// 4.07. Сделайте функцию getDivisors, которая параметром принимает число
// и возвращает массив его делителей (чисел, на которое делится данное число).


let getRndIntInRange = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) + min)
let num = getRndIntInRange(1000, -1000)


$('body').append(`<p>${num}<\p>`)

$('body').append(`<p>[${getDivisors(num).join(', ')}]<\p>`)


function getDivisors(num) {
    let resultArr = []
    let dvsr
    for (num > 0 ? dvsr = 1 : dvsr = -1;
         num > 0 ? dvsr <= num : dvsr >= num;
         num > 0 ? dvsr++ : dvsr--) {
        num % dvsr ? null : resultArr.push(dvsr)
    }
    return resultArr
}

