var days = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]

days.sort() // arranges the items in array in alphabetical order and also assigns it to days automatically
console.log(days)

days.reverse()	// reverses the array
console.log(days) 

index = days.indexOf("Mon1") //uses equality comparision
console.log(index) // return -1 if not found

var numbers = [20,60,40,65,80,8,22,200,2,3500] // It sees as them as strings and sorts alphabetically
numbers.sort(function(x,y){
	console.log(x,y)
})
console.log(numbers)