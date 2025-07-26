/*
Write examples illustrating the use of each of the following:

Static properties
Private properties
Setters and getters
Method chaining

Static properties
class User {
    static userCount = 0; // Static property to keep track of the number of users

    constructor(name) {
        this.name = name;
        User.userCount++; // Increment user count when a new user is created
    }

    static getUserCount() {
        return User.userCount; // Static method to get the user count
    }
}
// Private properties
class Account {
    #balance = 0; // Private property

    constructor(initialBalance) {
        this.#balance = initialBalance; // Initialize private balance
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount; // Modify private balance
        }
        return this; // Return the instance for method chaining
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount; // Modify private balance
        }
        return this; // Return the instance for method chaining
    }

    getBalance() {
        return this.#balance; // Access private balance
    }
}
// Setters and getters
class Product {
    #price; // Private property

    constructor(name, price) {
        this.name = name;
        this.#price = price; // Initialize private price
    }

    get price() {
        return this.#price; // Getter for private price
    }

    set price(newPrice) {
        if (newPrice >= 0) {
            this.#price = newPrice; // Setter for private price
        }
    }
}
// Method chaining
class Query {
    constructor() {
        this.query = ''; // Initialize query string
    }

    select(fields) {
        this.query += `SELECT ${fields} `; // Append to query string
        return this; // Return the instance for method chaining
    }

    from(table) {
        this.query += `FROM ${table} `; // Append to query string
        return this; // Return the instance for method chaining
    }

    where(condition) {
        this.query += `WHERE ${condition} `; // Append to query string
        return this; // Return the instance for method chaining
    }

    build() {
        return this.query.trim() + ';'; // Finalize and return the query string
    }
}
*/

/*
Explain the difference between this keyword's value in the following examples:

  const player = {
      firstName: "Ahmed",
      lastName: "Hafez",
      introduce: () => {
          console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
      }
  }
  player.introduce();

    --> In this example, the `this` keyword inside the arrow function `introduce` does not refer to the `player` object
    because arrow functions do not have their own `this` context. Instead, it refers to the `this` value of surrounding scope,
    which is likely the global object or undefined in strict mode. Therefore, it will not log the player's name correctly.

  
  const player = {
      firstName: "Ahmed",
      lastName: "Hafez",
      introduce() {
          console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
      }
  }
  player.introduce();

    --> In this example, the `this` keyword inside a regular function `introduce` refers to the `player` object
    when the method is called on the `player` object. It will correctly log "Hey, I'm Ahmed Hafez".

  
  function introduce() {
      console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
  }
  const player = {
      firstName: "Ahmed",
      lastName: "Hafez",
      introduce
  }
  player.introduce();

    --> In this example, the `introduce` function is defined separately and then assigned to the `player` object.
    When `player.introduce()` is called, `this` inside the function refers to the `player` object, so it will log "Hey, I'm Ahmed Hafez".

  
  function introduce() {
      console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
  }
  const player = {
      firstName: "Ahmed",
      lastName: "Hafez"
  }

  introduce();
  introduce.call(player);

    --> In this example, the `introduce` function is called directly without being a method of the `player` object.
    When called directly, `this` refers to the global object (or undefined in strict mode), so it will not log the player's name correctly.
    However, when `introduce.call(player)` is used, it explicitly sets `this` to the `player` object,
    allowing it to log "Hey, I'm Ahmed Hafez" correctly.
*/


// Make each class in a separate module and use them together in a different module (main.js)

import Vehicle from './vehicle.js';
import Bicycle from './bicycle.js';
// Create instances of Vehicle and Bicycle
const car = new Vehicle('red', 4, 'beep beep');
const bike = new Bicycle('blue');
console.log(car);
console.log(bike);
// Use the honkHorn method
car.honkHorn(); // Output: beep beep
bike.honkHorn(); // Output: honk honk

// (5 pts.) Add the function addHours() to the prototype of the Date constructor. 
// This function takes a number H as an argument and adds H hours to the date. 
// Make sure that the function will be added to ALL Date instances not only a single object.

// let date = new Date(2022, 10, 3, 12, 38); // 2022-11-03T12:38:00.000Z
// date.addHours(4);
// console.log(date); // 2022-11-03T16:38:00.000Z

Date.prototype.addHours = function(hours) {
    this.setHours(this.getHours() + hours);
    return this; // Return the updated date object for method chaining
}
let date = new Date(2022, 10, 3, 12, 38); // 2022-11-03T12:38:00.000Z
date.addHours(4);
console.log(date); // Thu Nov 03 2022 16:38:00 GMT+0200 (Eastern European Standard Time)

/*
Implement a generator function that yields the numbers of Fibonacci's sequence starting from 
the beginning of the sequence.

The well-known Fibonacci sequence 
F(0),F(1),F(2),…
 is defined as follows:F(0)=0 F(1)=1
For each i≥2: F(i)=F(i−1)+F(i−2)
*/

function* fibGenerator(n) {
    let a = 0, b = 1;
    let c = 0;
    while (n-- > 0) {
        yield a;

        c = a + b;
        a = b;
        b = c;

    }
    
}
for (let i of fibGenerator(10)) {
        console.log(i); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
}