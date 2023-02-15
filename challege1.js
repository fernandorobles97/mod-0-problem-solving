// The goal is to return strings that have ONLY 4 characters from 
// an array of strings.
// To begin I'd create an array with 5 strings and make 2 of them have only 4 characters
// then ill create a for loop statement with a counter variable (i) equal to 0 and give it
// a condition to be less than words.length and a final expression incrementing it 
// positively by one.   an if condition that will create a condition 
// to include only strings that have exactly 4 characters. I would add a console log
// statement that would run the words variable that references the i value.
// To me this seems like the simplest way of achieving this challenge. After looking back 
// I could not think of another route I could take that would result in fewer steps.


var words = ["Honey", "Love", "Valentine", "Partner", "Care"]

for (var i = 0; i < words.length; i++) {
    if (words[i].length === 4) {
        console.log(words[i]);
    }
}