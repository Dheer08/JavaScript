var projects = [
	{ hours:20,name:"Project 1" },
	{ hours:60,name:"Project 2" },
	{ hours:40,name:"Project 3" },
	{ hours:65,name:"Project 4" },
	{ hours:80,name:"Project 5" },
]

projects.sort(function(x,y)
{
	return x.hours-y.hours
})

//console.log(projects)
 
