// 4.01. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
// Так же если елементы массива это object или array, то их елементы тоже выводи отдельно
// [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {key: "name", age: 18}]

let presentArr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {key: "name", age: 18}]

function req(arr) {
    arr = arrayCheck(arr)
    let subArr = arrayCheck(arr.shift())
    Array.isArray(subArr) ? req(subArr) : console.log(subArr)

    return arr.length ? req(arr) : null

    function arrayCheck(checkObj) { // возвращает не объект
        return (Array.isArray(checkObj) || typeof(checkObj) != 'object') ? checkObj : Object.entries(checkObj)
    }
}

req(presentArr)



