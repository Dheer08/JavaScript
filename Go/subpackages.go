package main

import ("fmt"
		"math/rand")

// subpackages have to be imported in this manner
// You will get the same random number again until the random.seed is changed 
func main(){
	fmt.Println("A number from 1-100 : ",rand.Intn(100))
}
