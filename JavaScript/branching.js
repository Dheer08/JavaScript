var priceOfPhone = 42000 ,BankBalance = 16000,creditLimit = 60000

if(priceOfPhone < BankBalance)
{
	console.log("Process Payment")
}
else if(priceOfPhone < creditLimit)
{
	console.log("Bank Payment failed,Credit card will be used")
}
else 
{
	console.log("Insufficient Funds")
}

console.log("Transaction over")