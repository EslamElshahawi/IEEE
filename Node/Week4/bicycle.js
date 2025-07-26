/*
Then create a Bicycle subclass that extends the Vehicle class. 
The Bicycle subclass should override Vehicle's constructor function by changing 
the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.
*/
import Vehicle from './vehicle.js';

export default class Bicycle extends Vehicle {
    constructor(color, numberOfWheels = 2, horn = "honk honk") {
        super(color, numberOfWheels, horn);
    }
}