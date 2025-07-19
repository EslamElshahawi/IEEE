
const inputs = document.querySelectorAll('input');

const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
};

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});



/*
Compare between the three types of quantifiers in regular expressions (?, +, *).
the question mark (?) matches 0 or 1 occurrences of the preceding element,
the plus sign (+) matches 1 or more occurrences, and the asterisk (*) matches
0 or more occurrences.
*/

/*
What are the characters that can be represented by \w and \b in a regular expression?
The character \w represents any word character, 
which includes letters (both uppercase and lowercase), digits, and underscores. 
The character \b represents a word boundary, 
which is a position between a word character and a non-word character.
*/

/*
Compare between the Map and WeakMap according to the way they save keys and values.
Map stores keys and values, allowing any data type as keys,
while WeakMap only allows objects as keys and does not prevent garbage collection of keys.
WeakMap does not have methods to retrieve all keys or values,
and it does not prevent the keys from being garbage collected when there are no other references to them
*/

/*
Write an example of a string which matches the following pattern:
const regex = /^(0[1-9]|[12]\d|3[01])[-\/](0[1-9]|1[0-2])[-\/]\d{4}$/;
01-02-2004

and write another string that violates the following pattern:
const regex = /^(?!.*\bieee\b).+$/i;
hello world ieee
*/ 


/*
Use object and array destructing to get the values: 
"Zamalek" and "4th". Your solution should be 2 lines of code maximum.
*/
const user = {
    name: "Ashraf Ben Sharqy",
    age: 29,
    teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
    nationalTeam: {
        name: "Morroco",
        best: {
            africanCupOfNations: ["Champion", 2018],
            worldCup: ["4th", 2022],
        }
    }
}
const { teams: [,,zamalek], nationalTeam: {best: {worldCup:[place]}}} = user;
console.log(zamalek, place); 

/*
Given the object player:

{
    name: "Samir Kamona",
    club: "Al Ahly",
    score: 25
}
Use the spread operator to create a new object fantasyPlayer, 
which has the score set to 50 and has a 
position attribute set to "ST". Make sure the original object remains unchanged.
*/

const player = {
    name: "Samir Kamona",
    club: "Al Ahly",
    score: 25
}

const fantasyPlayer = {
    ...player,
    score: 50,
    position: "ST"
};
console.log(fantasyPlayer); 

/*
Write a function that takes an array of items, 
filters all elements starting with hand and ending with s or y or le 
(case insensitive). There may be other characters in between.

Tip: Use Regular Expressions

Example:
Input:
['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY']
Output:
['hands', 'hanDLes', 'Handcuffs', 'HANDINGLY']
*/

const arr = ['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];
const filtered = arr.filter(item => (/^hand.*(s|y|le)$/i).test(item));
console.log(filtered);


/*
Applying the concept of closures, create a counter using JavaScript and HTML. 
The counter should be able to increment, decrement, and reset its value, 
demonstrating the practical use of closures to maintain state between function calls.
*/

let count = 0;
function createCounter() {
    return {
        increment: function() {
            document.querySelectorAll('#counter')[0].textContent = ++count;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            if (count > 0) {
                document.querySelectorAll('#counter')[0].textContent = --count;
            } else {
                console.log("Count cannot be negative");
            }
            console.log(`Count: ${count}`);
        },
        reset: function() {
            count = 0;
            document.querySelectorAll('#counter')[0].textContent = count;
            console.log(`Count reset to: ${count}`);
        }
    };
}
const counter = createCounter();
document.getElementById('increment').addEventListener('click', counter.increment);
document.getElementById('decrement').addEventListener('click', counter.decrement);
document.getElementById('reset').addEventListener('click', counter.reset);
