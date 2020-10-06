class Bmi{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
    calculateBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
let myBmi = new Bmi(2,90);
console.log(myBmi.calculateBMI());