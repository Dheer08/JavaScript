package main

import "fmt"

func add (x,y float64) float64{
	return x+y
}

func main(){
	// https://www.tutorialspoint.com/go/go_data_types.htm
	//Refer this doumnentation as there are many datatypes 
	var num1 float64  = 5.6
	var num2 float64  = 6.5
	fmt.Println(add(num1,num2))
}