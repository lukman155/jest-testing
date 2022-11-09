module.exports = class Calculator {
    constructor(value, value1) {
        this.value = value;
        this.value1 = value1;
    }
    
    add() {
        return this.value + this.value1
    }
    
    subtract() {
        return this.value - this.value1
    }

    multiply() {
        return this.value * this.value1
    }

    divide() {
        return this.value / this.value1
    }
}

