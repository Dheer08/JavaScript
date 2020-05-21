// The keys are always string in javascript 
// you may not give "" explicitly to key as it is by default
//But when your key has special characters like space,@,$,number .... then must "double qoute" the key
// javaScript is case sensitive
var sholay = {
	"name" : "sholay",
	status : "Hit",
	Actors : ["Amitabh","Hema","Dharamendhra","Jaya"],
	"boxOffice stats" : {
		countries : 10,
		collection : 125000,
	},
	addToCollection : function(amount){ // "this" is known as the context of method
		this["boxOffice stats"].collection +=amount // this refers to current object
	}
}

console.log(sholay)
console.log(sholay.toll)
console.log(sholay.Actors[1])
console.log(sholay["boxOffice stats"].countries)

sholay.addToCollection(50)
console.log(sholay["boxOffice stats"]["collection"])

sholay.villan = "Gabbar Singh" // you can add properties even after defining object

delete sholay["boxOffice stats"]
console.log(sholay)


