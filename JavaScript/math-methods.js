console.log(Math)

console.log(Math.random())

console.log(Math.min(10,50,30,70,8))//Doesn't accepts array only comma seperated numbers
console.log(Math.max(10,50,30,70,8))

var numbers = [10,50,30,70,8]
console.log(Math.min.apply(null,numbers))

console.log(Math.ceil(3.12)) // 4
console.log(Math.floor(3.99)) // 3
console.log(Math.abs(-12)) // 12
console.log(Math.pow(3,4)) // 81
console.log(Math.round(3.12)) // 3
console.log(Math.round(3.99)) // 4
