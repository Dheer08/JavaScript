var days = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]
console.log(days)
console.log(days.length)
console.log(days[3])
console.log(days[7]) // undefined ,no outofBound exception
days[2] = "wed"
days[8] = "love" 
console.log(days)

var dummyArray = ["hello",1,true,undefined,null] // array containing different types
console.log(dummyArray)

var matrix = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12,13,14]
]
console.log(matrix)
console.log(matrix[2][5]) //14
console.log(matrix[2][6]) // undefined