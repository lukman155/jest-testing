const Calculator = require("./calculator")

describe("Calculator", () => {
    let calculator= new Calculator(10, 5);

    // beforeEach(() => {
    //     calculator = new Calculator(10, 5);
    // });

    test("should add two numbers", () => {
        expect(calculator.add()).toBe(15);
    });

    test("should subtract two numbers", () => {
        expect(calculator.subtract()).toBe(5);
    });

    test("should multiply two numbers", () => {
        expect(calculator.multiply()).toBe(50);
    });

    test("should divide two numbers", () => {
        expect(calculator.divide()).toBe(2);
    });
})

describe("Calculator", () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator(20 , 5)
})

test("should add two numbers", () => {
    expect(calculator.add()).toBe(25);
})

test("should subtract two numbers", () => {
    expect(calculator.subtract()).toBe(15);
})

test("should multiply two numbers", () => {
    expect(calculator.multiply()).toBe(100);
})

test("should divide two numbers", () => {
    expect(calculator.divide()).toBe(4);
})

})


describe ('Cslculator', () => {
    let calculator;
    beforeEach(() =>{
        calculator = new Calculator(20, 10);
    })

    test("should add two numbers", () => {
        expect(calculator.add()).toBe(30)
    })

    test("should subract two numbers", () => {
        expect(calculator.subtract()).toBe(10)
    })

    test("should multiply two numbers", () => {
        expect(calculator.multiply()).toBe(200)
    })

    test("should divide two numbers", () => {
        expect(calculator.divide()).toBe(2)
    })
})