class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model =model;
        this.year = year;

    }

    information(){
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year ${this.year}.`);
    }
}
class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.door = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.door}`);
        }
}
let myCar = new Cars(`VW`,`Passat` , 2020,5 );
myCar.Information();