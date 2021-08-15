(function (a, b, c){
    return a + b + c
})

//Function expression

const sum = function(a, b){
    return a + b
}
const mul = function(a, b){
    return a * b
}

const resultSum = sum(7, 59)
console.log(resultSum)

const anotherSum = sum
console.log(anotherSum(22, 3))

let x = 3
console.log(x)

x = sum
console.log(x(11, 16))

const resultMul = mul(5, 10)
console.log(resultMul)