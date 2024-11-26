class SpareParts {
    constructor(engine, wheels){
        this.engine = engine;
        this.wheels = wheels
    }

    getcarDetails(){
        console.log(this.engine + "," + this.wheels)
    }
}


class Car extends SpareParts {
    constructor(make, modal, year, engine, wheels){
        super(engine, wheels)
        this.make = make;
        this.modal = modal;
        this.year = year;
    }

    getCarModal(){
        console.log(this.modal)
    }

    getCarMake(){
        console.log(this.make)
    }
    get(){
        console.log(this)
    }
}

const car = new Car("Tata", "Punch", "2020", "fiat", "ceat");
// const sphare = new SpareParts("Fiat", "Ceat")

console.log(car)