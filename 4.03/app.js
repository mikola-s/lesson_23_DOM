// 4.03. Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа.
// Создайте для этого вспомогательную функцию isPositive(),  которая параметром будет принимать число
// и возвращать true, если число положительное, и false - если отрицательное.
// var arr = [1, 2, 3, -1, -2, -3];

let startArr = [1, 2, 3, -1, -2, -3]
let resultArr = []


$('body').append(`<p>[${startArr.join(', ')}]<\p>`)

// startArr.map((val) => val > 0 ? resultArr.push(val) : null) // вариант 1

startArr.map((val) => isPositive(val) ? resultArr.push(val): null) // вариант 2

$('body').append(`<p>[${resultArr.join(', ')}]<\p>`)


function isPositive(value){
    return value > 0 ? true : false
}




