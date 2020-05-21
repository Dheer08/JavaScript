var global_x  = 1
//local_bar_y = 100
console.log('outside of any function, global_x : ',global_x)

function foo(){
	var local_foo_x = 2
	var z = 6
	console.log("inside foo , global_x : ",global_x)
	console.log("inside foo , local_foo_x : ",local_foo_x)
	console.log("inside foo , z : ",z)

	function bar(){
		var z = 19
		var local_bar_x = 3 // available only within the bar
		local_bar_y = 10 // It is global variable
		console.log("inside bar , global_x : ",global_x)
		console.log("inside bar , local_foo_x : ",local_foo_x)
		console.log("inside bar , local_bar_x : ",local_bar_x)
		console.log("inside bar , local_bar_y : ",local_bar_y)
		console.log("inside bar , z : ",z)
	}
	bar()
	console.log("inside foo , local_bar_y : ",local_bar_y)
	//console.log("inside bar , local_bar_x : ",local_bar_x) //local_bar_x is not defined
}
foo()
console.log("outside all functions , local_bar_y : ",local_bar_y)


