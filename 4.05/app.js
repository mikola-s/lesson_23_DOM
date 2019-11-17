// 4.05. Дан массив с числами. Запишите в новый массив только те числа,
// которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную
// функцию isNumberInRange из предыдущей задачи.


let startArr = createRandomNumArray(10, 20, -20)
let resultArr = []

$('body').append(`<p>[${startArr.join(', ')}]<\p>`)

startArr.map((val) => isNumberInRange(val) ? resultArr.push(val) : null)

$('body').append(`<p>[${resultArr.join(', ')}]<\p>`)



function isNumberInRange(val, min=0, max=10) {
    return (min < val && val < max) ? true : false
}


function createRandomNumArray(arrayLength=10, maxInt=100, minInt=-100) {
    let getRndIntInRange = (max, min=0) => Math.floor(Math.random() * (max - min + 1) + min)
    return new Array(arrayLength).fill(0).map( () => getRndIntInRange(maxInt, minInt))
}
