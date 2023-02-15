// From an array of strings, I will return only the ones that start with "t".
// First ill declare my array variable of 5 strings and have 2 of them begin 
// with "t".
// Next ill start a for loop statement with a counter variable (i) equaling 0 and give it
// a condition to be less than words.length and a final expression incrementing it 
// positively by one.  
// Then ill begin an if statement and within it state the words variable with reference to the 
// counter variable and then call the startsWith() method with "t" as the value.
// The final part of the for loop will be the console.log() statement that 
// states the words variable with reference to the counter variable.
// I've looked back at my code and think this is the simplest way to achieve the goal
// when considering we have an array with multiple values that need to be checked.


var words = ["tim", "Timber", "dog", "timothy"]
for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("t")) {
        console.log(words[i]);
    }
}