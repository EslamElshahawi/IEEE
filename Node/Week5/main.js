/*
    * Week 5 - Asynchronous JavaScript
Explain the difference between synchronous and asynchronous code.
    * Synchronous code executes sequentially, blocking the execution of subsequent code until the current operation completes.
    * Asynchronous code allows operations to run in the background, enabling other code to execute while waiting for a response.
*/

/*
Compare between fetch function and 
XMLHttpRequest class using Numbers API to call the API and print the response out to the console.
*/

// Using Fetch API
const fetchTodos = async () => {
    try {
        const response = await fetch('http://numbersapi.com/5/math');
        if(!response.ok) {
            throw new Error("error fetching data: " + response.statusText);
        }
        const data = await response.text();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
// Call the fetchTodos function to execute the fetch request
fetchTodos();
// Using XMLHttpRequest
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if(request.readyState === XMLHttpRequest.DONE) {
        if(request.status === 200) {
            const data = request.responseText;
            console.log(data);
        } else {
            console.error('Error fetching data:', request.status, request.statusText);
        }
    }
});
request.open('GET', 'http://numbersapi.com/5/math');
request.send();


/*
Waleed has the Imparnumerophobia, which means he fears the odd numbers. 
Waleed asked you to design a program for him that modifies the strings by 
replacing any odd number with the word "BEEP". 
Help him implement this program using your knowledge in regular expressions.
*/
const replaceOddNumbers = (inputString) => {
    const oddNumberRegex = /\b[2468]*[13579]+\b/g;
    const modifiedString = inputString.replace(oddNumberRegex, 'BEEP');
    return modifiedString;
};
console.log(replaceOddNumbers("I have 12 cars, 11 of which are 89 years old"));

/*
Using Star Wars API Documentation, write a program that gets the planet name of the character with ID 4
*/

const fetchPlanetName = async (characterId) => {
    try {
        const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
        if (!response.ok) {
            throw new Error("Error fetching data: " + response.statusText);
        }
        const data = await response.json();
        const homeworldResponse = await fetch(data.homeworld);
        if (!homeworldResponse.ok) {
            throw new Error("Error fetching homeworld data: " + homeworldResponse.statusText);
        }
        const homeworldData = await homeworldResponse.json();
        console.log(`Character ID ${characterId} is from the planet: ${homeworldData.name}`);
    } catch (error) {
        console.error('Error:', error);
    }
};
fetchPlanetName(4);
// this website uses an outdated certificate, so you might need to bypass security warnings in your browser to test the code.

/*
One day Seif visited the fake store to buy some fake products.

Seif bought:

3 items of product 1
4 items of product 4
5 items of product 3
Seif is bad at math, can you help him calculate the total price of the products?

Utilize the Fake Store API Documentation
*/

fetch('https://fakestoreapi.com/products')
    .then(response => {
        if(!response.ok) {
            throw new Error("Error fetching data: " + response.statusText);
        }
        return response.json();
    })
    .then(products => {
        const product1 = products.find(product => product.id === 1);
        const product4 = products.find(product => product.id === 4);
        const product3 = products.find(product => product.id === 3);

        if (!product1 || !product4 || !product3) {
            throw new Error("One or more products not found");
        }

        const totalPrice = (product1.price * 3) + (product4.price * 4) + (product3.price * 5);
        console.log(`Total price of the products: $${totalPrice.toFixed(2)}`);
    })
    .catch(error => {
        console.error('Error:', error);
    }
);

/*
The following code suffers from callback hell. 
The callbacks are nested in a confusing way. 
Solve the callback hell problem using each of:

Promise Chaining

Async/Await Syntax

setTimeout(() => {
    console.log("Hey there!");

    setTimeout(() => {
        console.log("This code will help you understand");

        setTimeout(() => {
            console.log("Asynchronous Programming");

            setTimeout(() => {
                console.log("What The Callback Hell!!!");

                setTimeout(() => {
                    console.log("I AM STUCK");
                }, 1000);
            }, 3000);
        }, 2000);
    }, 3000);
}, 5000);
*/

// Using Promise Chaining
const callbackHell = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hey there!");
            resolve();
        }, 5000);
        })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("This code will help you understand");
                resolve();
            }, 3000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Asynchronous Programming");
                resolve();
            }, 2000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("What The Callback Hell!!!");
                resolve();
            }, 3000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("I AM STUCK");
                resolve();
            }, 1000);
        });
    });
};
callbackHell().catch(error => {
    console.error('Error:', error);
});
callbackHell();
// Using Async/Await Syntax
const asyncCallbackHell = async () => {
    try {
        await new Promise(resolve => setTimeout(() => {
            console.log("Hey there!");
            resolve();
        }, 5000));

        await new Promise(resolve => setTimeout(() => {
            console.log("This code will help you understand");
            resolve();
        }, 3000));

        await new Promise(resolve => setTimeout(() => {
            console.log("Asynchronous Programming");
            resolve();
        }, 2000));

        await new Promise(resolve => setTimeout(() => {
            console.log("What The Callback Hell!!!");
            resolve();
        }, 3000));

        await new Promise(resolve => setTimeout(() => {
            console.log("I AM STUCK");
            resolve();
        }, 1000));
    } catch (error) {
        console.error('Error:', error);
    }
}
asyncCallbackHell();

/*
There's an application made for a study group where there's a Student class. 
Each student can have an instructor, but due to financial setbacks 
the study group can only hire 1 instructor who can work for multiple students. 
If all students don't need an instructor, then there's no need to hire one.

You notice that this example fulfills the description of 
the singleton design pattern. Implement the classes Student and Instructor to apply 
the case as described.
*/

class Instructor {
    constructor(name) {
        if(!Instructor.instance){
            this.name = name;
            Instructor.instance = this;
        }
        return Instructor.instance;
    }
    static getInstance(name) {
        if (!Instructor.instance) {
            Instructor.instance = new Instructor(name);
        }
        return Instructor.instance;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.instructor = null;
    }

    assignInstructor(instructor) {
        if (instructor instanceof Instructor) {
            this.instructor = instructor;
        } else {
            throw new Error("Invalid instructor");
        }
    }

    getInstructor() {
        return this.instructor ? this.instructor.name : "No instructor assigned";
    }
}
const instructor1 = Instructor.getInstance("Dr. Smith");
const instructor2 = Instructor.getInstance("Dr. Jones"); // This will return the same instance as instructor1
console.log(instructor1 === instructor2); // true, both variables point to the same instance
console.log(`Instructor name: ${instructor1.name}`); // Dr. Smith
const student1 = new Student("Alice");
const student2 = new Student("Bob");
student1.assignInstructor(instructor1);
student2.assignInstructor(instructor1);
console.log(`${student1.name} is assigned to instructor: ${student1.getInstructor()}`);
console.log(`${student2.name} is assigned to instructor: ${student2.getInstructor()}`);
console.log(`Instructor name: ${instructor1.name}`);

/*
Describe factory design pattern using an example of your own.
*/
class Vehicle {
    constructor(type, wheels) {
        this.type = type;
        this.wheels = wheels;
    }

    getDetails() {
        return `Type: ${this.type}, Wheels: ${this.wheels}`;
    }
}
class VehicleFactory {
    static createVehicle(type) {
        switch (type) {
            case 'car':
                return new Vehicle('Car', 4);
            case 'motorcycle':
                return new Vehicle('Motorcycle', 2);
            case 'truck':
                return new Vehicle('Truck', 6);
            default:
                throw new Error('Unknown vehicle type');
        }
    }
}
const car = VehicleFactory.createVehicle('car');
console.log(car.getDetails()); // Type: Car, Wheels: 4
const motorcycle = VehicleFactory.createVehicle('motorcycle');
console.log(motorcycle.getDetails()); // Type: Motorcycle, Wheels: 2
const truck = VehicleFactory.createVehicle('truck');
console.log(truck.getDetails()); // Type: Truck, Wheels: 6