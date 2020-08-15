// 1. Copy and paste your prototype in here and refactor into class syntax.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class Cuboid {
    //Base constructor
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    };

    //volume Method
    volume () {
        return this.length * this.height * this.width;
    };

//Surface Area Method
surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
};
}; 

const myCuboid = new CuboidMaker(4, 5, 5);

console.log(myCuboid);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(myCuboid.volume()); // 100
console.log(myCuboid.surfaceArea()); // 130

/* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties 
from CuboidMaker.  Test your work by logging out your volume and surface area. */

class Cube extends Cuboid {
    constructor (length, width, height) {
        super (length, width, height);
    };

    surfaceArea () {
        return 6 * (this.length * this.height);
    };

    volume () {
        return this.length * this.height * this.width;
    }
}

const myCube = new Cube (3, 3, 3);


console.log(myCube.surfaceArea());
console.log(myCube.volume());

