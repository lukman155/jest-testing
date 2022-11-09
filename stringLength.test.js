const stringLength = require("./stringLength.js");

test("stringLength returns the length of a string", () => {
    expect(stringLength("hello")).toBe(5);
    })

test("stringLength returns the length of a string", () => {
    expect(stringLength("hello")).not.toBe(4);
    })

