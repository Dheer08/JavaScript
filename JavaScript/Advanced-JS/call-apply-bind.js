function greet(message,name){
	// console.log(this)
	console.log(message+" "+name+"!")
}

greet("good morning","rakshith")

console.log(greet instanceof Object) // surprise

greet.x = 100
console.log(greet)

greet.foo = function(){
	console.log("foo called")
}
console.log(greet)
console.log(greet.foo())

// call
// The first argument passed will be the context of it
greet.call('hello',"Good Evening","Rakshith")

//apply
// if the arguemnts to be passed is in array
var args = ["Good Afternoon","Puppy"]
greet.apply("hello",args)
// null as a context
greet.apply(null,args)

// bind
var greetBound = greet.bind("world")
greetBound("Hello","idiot")

var greetHolo = greet.bind(null,"Hola") //  The arguments must be fixed in order
greetHolo("Derek")