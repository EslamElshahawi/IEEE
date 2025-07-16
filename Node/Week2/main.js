/*
Explain the difference between primitive types and reference types in JavaScript.
Primitive types in JavaScript are basic data types that are immutable and 
directly hold their values. 
These include `undefined`, `null`, `boolean`, `number`, `string`, and `symbol`.
When you assign a primitive type to a variable, 
the variable contains the actual value.
Reference types, on the other hand, are more complex data structures
that store references to their values rather than the values themselves.
These include objects, arrays, and functions.
When you assign a reference type to a variable,
the variable contains a reference (or pointer) to the location in memory
where the value is stored, not the value itself.

also primirive types lie on the stack, while reference types lie on the heap.
Reference types can be mutable, meaning their contents can change,
*/

/*
Compare the two methods of creating a new function in JavaScript: 
Function Declaration and Function Expression. Discuss 
the differences between them in terms of hoisting and provide examples for each.

Function Declaration is a way to define a function using the `function` keyword followed by the function name.
It is hoisted, meaning it can be called before its definition in the code.
Example:

function greet() {
    console.log("Hello, World!");
}
greet(); // This works because greet is hoisted

Function Expression, on the other hand, involves defining 
a function as part of an expression,
often assigned to a variable.
It is not hoisted, meaning it cannot be called before its definition.
Example:
const greet = function() {
    console.log("Hello, World!");
};
greet(); // This works because greet is defined before it's called
// This will throw an error if called before the definition
// greet(); // Uncaught ReferenceError: greet is not defined
*/

/*
Research the concept of "Pure Function" and then respond to the following:
Under what conditions can a function be classified as a pure function?
A function can be classified as a pure function if it meets the following conditions:
1. It always produces the same output for the same input, meaning it is deterministic.
2. It does not cause any side effects, meaning it does not modify any external state or
   variables outside its scope, nor does it rely on any external state that can change.
Pure functions are predictable and easier to test, debug, and reason about.
Example of a pure function:
function add(a, b) {
    return a + b; // Always returns the same output for the same inputs
}
Example of a non-pure function:
let counter = 0;
function increment() {
    counter++; // Modifies external state, hence not pure
}
*/

/*
Write down the array methods 
that you have studied and classify them to destructive and not destructive.
Destructive Array Methods:
1. `push()`: Adds one or more elements to the end of an array and returns
    the new length of the array.
2. `pop()`: Removes the last element from an array and returns that element.
3. `shift()`: Removes the first element from an array and returns that element.
4. `unshift()`: Adds one or more elements to the beginning of an array and
    returns the new length of the array.
5. `splice()`: Changes the contents of an array by removing or replacing existing elements
    and/or adding new elements in place.
Not Destructive Array Methods:
1. `concat()`: Merges two or more arrays and returns a new array without modifying
    the original arrays.
2. `slice()`: Returns a shallow copy of a portion of an array into a new array
    without modifying the original array.
3. `map()`: Creates a new array populated with the results of calling a provided function
    on every element in the calling array, without modifying the original array.
4. `filter()`: Creates a new array with all elements that pass the test implemented by
    the provided function, without modifying the original array.
5. `reduce()`: Executes a reducer function on each element of the array, resulting in
    a single output value, without modifying the original array.
6. `forEach()`: Executes a provided function once for each array element, but does
    not return a new array or modify the original array.
*/

// Create a basic inventory management system in JavaScript.

function createItem(name, category, price, stock) {
    return {
        name: name || "Unknown Item",
        category: category || "General",
        price: price || 0,
        stock: stock || 0,
        updateStock: function(amount) {
            this.stock += amount;
            console.log(`${this.name} stock updated. New stock: ${this.stock}`);
        },
        applyDiscount: function(discount) {
            if (discount > 0 && discount < 1) {
                this.price -= this.price * discount;
                console.log(`${this.name} price after discount: $${this.price.toFixed(2)}`);
            } else {
                console.log("Invalid discount value. Must be between 0 and 1.");
            }
        }
    }
}

inventory = {
    items : [],
    addItem: function(item) {
        if (item && item.name && item.category) {
            this.items.push(item);
            console.log(`Item ${item.name} added to inventory.`);
        }
    },
    removeItem: function(itemName) {
        const index = this.items.findIndex(item => item.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1);
            console.log(`Item ${itemName} removed from inventory.`);
        } else {
            console.log(`Item ${itemName} not found in inventory.`);
        }
    },
    getItem: function(itemName) {
        const item = this.items.find(items => items.name === itemName);
        if(item) {
            console.log(`Item found: ${item.name},
                        Category: ${item.category},
                        Price: $${item.price.toFixed(2)},
                        Stock: ${item.stock}`);
            return item;
        } else {
            console.log(`Item ${itemName} not found in inventory.`);
            return null;
        }
    },
    filterItems: function(predicate) {
        const filteredItems = this.items.filter(predicate);
        if(filteredItems.length > 0) {
            console.log("filtered items:");
            filteredItems.forEach(item => {
                console.log(`Name: ${item.name},
                            Category: ${item.category},
                            Price: $${item.price.toFixed(2)}, 
                            Stock: ${item.stock}`);
            });
        } else {
            console.log("No items match the filter criteria.");
        }
    },
}

// Example usage
const item1 = createItem("Laptop", "Electronics", 999.99, 10);
const item2 = createItem("Smartphone", "Electronics", 499.99, 20);
const item3 = createItem("Desk Chair", "Furniture", 89.99, 15);

item1.updateStock(5);
item2.applyDiscount(0.1);

inventory.addItem(item1);
inventory.addItem(item2);
inventory.addItem(item3);
inventory.getItem("Laptop");

inventory.filterItems(item => item.category === "Electronics");
inventory.removeItem("Smartphone");
inventory.getItem("Smartphone");
inventory.filterItems(item => item.stock > 0);
inventory.filterItems(item => item.price < 100);
inventory.filterItems(item => item.name.includes("Desk"));