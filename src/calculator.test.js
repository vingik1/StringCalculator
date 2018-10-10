const add = require('./calculator');

it("should return zero on an empty string", () =>{
    expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () =>{
    expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () =>{
    expect(add("5,5")).toBe(10);
});

it("should return sum of multiple numbers", () =>{
    expect(add("5,5,20")).toBe(30);
});

it("should return sum of multiple numbers", () =>{
    expect(add("1\n2,3")).toBe(6);
});

it("should return error message due to negative number", () =>{
    expect(add("1\n2,-3")).toBe("Negatives not allowed: -3");
});

it("should return error message due to negative number", () =>{
    expect(add("-1\n2,-3,-6")).toBe("Negatives not allowed: -1,-3,-6");
});

it("should return sum of all number below 1001", () =>{
    expect(add("5,1\n1001,1130,1000")).toBe(1006);
});

it("should return 2", () =>{
    expect(add("1001,2")).toBe(2);
});

it("should return sum of two numbers", () =>{
    expect(add("//;\n2;7")).toBe(9);
});