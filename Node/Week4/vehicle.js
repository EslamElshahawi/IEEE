/*
Create a Vehicle class which has 3 properties: color, 
number of wheels and horn. The color defaults to "blue", 
the default value of number of wheels is 4 and the horn defaults to "beep beep".

Add a method honkHorn() which prints the value of the horn of the vehicle.
*/

export default class Vehicle {
    constructor(color, numberOfWheels = 4, horn = "beep beep") {
        this.color = color || "blue" 
        this.numberOfWheels = numberOfWheels;
        this.horn = horn; 
    }

    honkHorn() {
        console.log(this.horn);
    }

}
