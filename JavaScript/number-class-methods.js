console.log(Number.parseInt(3.56))
console.log(Number.parseFloat(2.0))
console.log(Number.parseFloat("7.75",10)) // 10 for decimal system
console.log(Number.parseInt("abcdef",16)) // 16 for hexadecimal system

// useful for currency values
wrappedNumber = new Number(3.5678)
console.log(wrappedNumber.toFixed(2))
console.log(wrappedNumber)
console.log(3.5678.toFixed(3)) // object of type number is automatically created

//when you encounter the mathematical expressions that doesn't makes sense it results in special value NaN
console.log(1/"hello") 
console.log(Number.NaN) 
console.log(NaN == NaN)// It cannot be compared with anything even with it self
console.log(Number.isNaN(1/"love")) // this way you can compare NaN