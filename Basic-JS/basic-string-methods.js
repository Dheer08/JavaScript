var quote = 'With great power comes great responsibility'
// string is immutable in javaScript
var pieceOfQuote = quote.substring(10)
console.log(pieceOfQuote)

var replacedString = quote.replace("responsibility","electricity bill")
//console.log(replacedString)
//console.log(quote) // No change as string is immutable

var fruits = "apple,orange,banana"
var fruitArray = fruits.split(",")
console.log(fruitArray)

console.log(quote.indexOf('great'))
console.log(quote.lastIndexOf('great'))
// If it does not find it returns -1