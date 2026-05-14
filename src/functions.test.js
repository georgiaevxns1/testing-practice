import { capitaliseString, reverseString, calculator, caesarCipher, analyseArray } from "./functions.js";

test("capitalises a string", () => {
    expect(capitaliseString("apple")).toBe("Apple");
});

test("reverses a string", () => {
    expect(reverseString("apple")).toBe("elppa");
});

test("calculator adds", () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test("calculator subtracts", () => {
    expect(calculator.subtract(5, 1)).toBe(4);
});

test("calculator divides", () => {
    expect(calculator.divide(6, 2)).toBe(3);    
});

test("calculator multiples", () => {
    expect(calculator.multiply(3, 2)).toBe(6);
});

test("caesarCipher ciphers", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher maintains upper-case", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher ignores non-alphabetical characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe('Khoor, Zruog!');
});

test("analyseArray returns average", () => {
    expect(analyseArray([1,8,3,4,2,6]).average).toBe(4);
});

test("analyseArray returns min", () => {
    expect(analyseArray([1,8,3,4,2,6]).min).toBe(1);
});
test("analyseArray returns max", () => {
    expect(analyseArray([1,8,3,4,2,6]).max).toBe(8);
});

test("analyseArray returns length", () => {
    expect(analyseArray([1,8,3,4,2,6]).length).toBe(6);
});