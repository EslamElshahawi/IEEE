/* 
difference between == (equivelence operator) and === (identical operator)
is that == checks for value equality, while === checks for value and type equality.
The == operator performs type coercion if the types are different, while === does not.


const arr = [10, 5, 11];
arr.sort();
this does not sort the array numerically, but rather comparing unicode (as strings).
the correct way to sort an array numerically is to pass a comparison function to the sort method:
arr.sort((a, b) => a - b); for ascending order or arr.sort((a, b) => b - a); for descending order.
*/

// Write a JavaScript program that converts temperature from Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32; 
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

// Write a JavaScript program that takes an array and updates it in place. 
// Each Element in the array is a string or a number.
//  If it's a number, you should multiply it by 3. If it's a string,
//  you should make the first letter uppercase and the rest lowercase.

let arr = [19, "dreams", "PlayGround", 2, "xD", "i"];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        arr[i] *= 3; 
    } else if (typeof arr[i] === 'string') {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase(); 
    }
}
console.log(arr);


/*
Adel wrote a secret message that he didn't want anyone to read easily.
 To make it difficult to understand, he reversed it.
  He then thought that it wasn't enough, 
  so he wanted to perform another minor change that would make it unrecognizable.
   Write a JavaScript program that takes a string s
 and prints it again after reversing it and making all vowel letters uppercase.
*/

let s = "Hey There, I'm glad to have you";

s = s.split('').reverse().join('');
for (let i = 0; i < s.length; i++) {
    if ('aeiou'.includes(s[i].toLowerCase())) {
        s = s.substring(0, i) + s[i].toUpperCase() + s.substring(i + 1);
    }
}
console.log(s);
//UOy EvAh Ot dAlg m'I ,ErEhT yEH

/*
Write a JavaScript program that takes a string and an array of forbidden letters. 
Your program should print the string after
removing the forbidden letters from it and make all letters separated by hiphens -.
*/

let text = "Please";
let forbiddenLetters = ['r', 'x', 'p', 'a'];
for(let i = 0; i < text.length; i++) {
    if (forbiddenLetters.includes(text[i].toLowerCase())) {
        text = text.substring(0, i) + text.substring(i + 1);
        i--;
    }
}
text = text.split('').join('-');
console.log(text); // l-e-s-e