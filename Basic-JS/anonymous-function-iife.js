// IIFE - Immediately Invoked Function Expression
// try to use less no. of global variables
(function(x){

	var x = 100
	const sum = function (x,y,callback1){
		var sum = x + y
		callback1(sum)
	}
	//console.log(sum(10,20))

	function logResult(result){
		console.log(result)
	}

	sum(10,20,logResult)
})(global)

//wrapper()
