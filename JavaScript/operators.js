/*  1.Airthematic Operators - +,-,%,/,*
	2.Logical operators
	3.Relational operators
	4.miscellenaous operators
*/
// Operators follows BODMAS Rule
var city = "Banglore"
var isTrafficHuge = city === "Banglore"?"yes":"No"
console.log(isTrafficHuge)

console.log("1 == '1'",1=="1") //strange type unsafe comparision
console.log("1 === '1'",1==="1") //type safe comparision
// explore !==,>== .....


console.log("Airthematic Operators")
var x = 12 ,y = 13 
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(y % x)

console.log("relational operators")
console.log(x > y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)

console.log("Logical Operators")
x = true,y =false
console.log(!x) // false
console.log(x & y) // 0
console.log(x && y) // false
console.log(x || y) // true


//miscellaneous
var name = "rakshith",message = "hello,"
console.log(message+name)
