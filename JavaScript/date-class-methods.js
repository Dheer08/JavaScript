var today = new Date()
console.log(today)

var milleniumStart = new Date(2000,0,1) // 0 -January
console.log(milleniumStart)

today.setDate(today.getDate() + 1)
console.log(today)

var july31 = new Date(2020,6,31,5,30,0)
console.log(july31)
july31.setDate(july31.getDate() + 1)
console.log(july31)

//getters
console.log(july31.getMonth())
console.log(july31.getDay()) // 6-Saturday

//setters
var today = new Date(2020,4,22,5,30,0)
console.log(today)
today.setDate(9)
console.log(today)
today.setFullYear(2019)
console.log(today)
console.log(today.toTimeString())
