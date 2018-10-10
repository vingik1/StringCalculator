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