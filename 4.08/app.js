// 4.08. Дан массив с целыми числами. Создайте из него новый массив,
// где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей задачи.


let startArr = createRandomNumArray()
let resultArr = []

$('body').append(`<p>[${startArr.join(', ')}]<\p>`)

startArr.map((val) => !isEven(val) ? resultArr.push(val) : null)

$('body').append(`<p>[${resultArr.join(', ')}]<\p>`)


function isEven(num){
    return num % 2 ? true : false
}


function createRandomNumArray(arrayLength=10, maxInt=100, minInt=-100) {
    let getRndIntInRange = (max, min=0) => Math.floor(Math.random() * (max - min + 1) + min)
    return new Array(arrayLength).fill(0).map( () => getRndIntInRange(maxInt, minInt))
}

