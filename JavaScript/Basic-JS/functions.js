//function declaration syntax
// sum() can be called from here but sum2 cannot be called before its defined
function sum(x,y){
	result = x + y
	return result
}

var result = sum(12,13)
console.log("result : ",result)

//function expression syntax (more like variable declaration and assignment

var sum2 = function (x,y){
	var result = x + y
	return result
}

console.log(sum2(13,14))