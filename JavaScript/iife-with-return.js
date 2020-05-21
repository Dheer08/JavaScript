const someVariable = (function(){
	return 100
})() //It looks like declaration of a function but its not

console.log(someVariable)

const sum = function(x,y){
	return x + y //This is declaration of a function
}