class Calculator {
    constructor(value){
        this.value = value
    }

    add(num){
         this.value += num

        return this;
    }

    multiply(num){
        this.value *= num   
        return this;
    }
}

const cal = new Calculator("2");

console.log(cal.multiply(5).add(5))

