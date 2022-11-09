const capitalize = require("./capitalize")

test("Should capitalize the input String", () => {
    expect(capitalize("hello")).toBe("Hello");
})
