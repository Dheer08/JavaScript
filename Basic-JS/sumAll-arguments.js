function sumAll(){
	var result = 0
	for(var i = 0;i<arguments.length;i++)
	{
		result += arguments[i]
	}
	return result
}

console.log(sumAll(10,20,30,40,50))
console.log(sumAll(10,20,30))