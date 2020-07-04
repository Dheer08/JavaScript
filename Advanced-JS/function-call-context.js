function foo(){
	console.log(this)
}
//foo()

var john = {
	Name : "john",
	getName : function(){
		console.log(this) // this refers to the object called here
		return this.name
	}
}

john.getName()

var getName = john.getName
getName()
