// We'll start with an array of travel destinations, the goal is to sort them in 
// alphabetical order within a sentence that will use string interpolation to help
// achieve this for every destination listed.
// First, we'll declare the array variable that will contain 4 strings, each being a different
// city. 
// Next, I would call the sort() method on the cities array to put them in alphabetical order.
// Then we begin a for loop statement with a counter variable (i) equaling 0 and give it
// a condition to be less than cities.length and a final expression incrementing it 
// positively by one. 
// Follow this with a console.log() statement and use the sentence "The next place I want
// to visit is " and after is I would use string interpolation with the cities variable 
// referencing to the counter variable. 
// So when looking back at my code, I see I could have called the sort method inside
// the string interpolation to achieve the same goal in 3 lines of code instead of 4. I'm
// unsure if this would be considered simpler or not. Personally, when I look at the first
// solution I have it seems simpler and easier to follow. 

var cities = ["Miami", "Moab", "Terilingua", "Salem"]
cities.sort();
for (var i = 0; i < cities.length; i++) {
   console.log(`The next place I want to vist is ${cities[i]}!`);
}

var cities = ["Miami", "Moab", "Terilingua", "Salem"]
for (var i = 0; i < cities.length; i++) {
   console.log(`The next place I want to vist is ${cities.sort()[i]}!`);
}