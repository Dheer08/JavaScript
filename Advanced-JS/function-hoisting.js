//boo() Error since it is not declared anywhere
foo()
function foo(){
	console.log("foo called")
}
foo()

// All function declarations get executed first and then the program starts executing other lines
// It goes to the top of scope

//bar() This doesn't work because bar is a declared but not assigned as a function
var bar = function(){
	console.log("bar called")
}

bar()