
var days = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]

days.sort() // arranges the items in array in alphabetical order and also assigns it to days automatically
console.log(days)

days.reverse()	// reverses the array
console.log(days) 

index = days.indexOf("Mon1") //uses equality comparision
console.log(index) // return -1 if not found

var numbers = [20,60,40,65,80,8,22,200,2,3500] // It sees as them as strings and sorts alphabetically
numbers.sort(function(x,y){ //strange way of sorting
	return y-x
})
//console.log(numbers)

days.push("set")
console.log(days)

// Removes last element and returns it
console.log(days.pop())
console.log(days)

//Adds the element at front
days.unshift("Holiday")
console.log(days)

//Removes front element and returns it
days.shift()
console.log(days)

// removing the elements from start to end
console.log(days.splice(1,1,"Tuesday"))
console.log(days)

// It doesn't remove the array but copies the sliced portion
var slicedDays = days.slice(2,4)
console.log(slicedDays)
console.log(days)