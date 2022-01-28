class car {
    constructor (make, model, year, milage, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.color =color;
    }
    driveToWork () {
        console.log(`your old milage is ${this.milage}`)
        this.milage = this.milage + 30;
        console.log(`after drive to work: ${this.milage} miles`)
        ;
    }
    driveAroundTheWorld (){
        console.log(`before driving around the world: ${this.milage} miles`)
        this.milage = this.milage + 24000;
        console.log(`after driving around the world: ${this.milage} miles`)
}
runErrands (){
    console.log(`before running errands: ${this.milage} miles`)
    this.milage = this.milage + 30;
    console.log(`after running errands: ${this.milage} miles`)
}
}
carlos = new car('toyota','corolla',"2016",3, "red")
carlos.driveToWork();
carlos.driveAroundTheWorld ();
carlos.runErrands();