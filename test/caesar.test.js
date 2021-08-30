// Write your tests here!
const caesar = require("../src/caesar").caesar;
const expect = require("chai").expect;

describe("Caesar", () => {
    it("should return false if shift is less than -25", () => {
        const actual = caesar("Hi", -26);
        expect(actual).to.be.false;
    });
    it("should return false if shift is greater than 25", () => {
        const actual = caesar("Hi", 26);
        expect(actual).to.be.false;
    });
    it("should return false if shift is 0", () => {
        const actual = caesar("Hi", 0);
        expect(actual).to.be.false;
    });
    it("Ignores Capital Letters", () => {
        const actual = caesar("ABCDEFG", 3);
        const expected = "defghij";
        expect(actual).to.equal(expected);
    });
    it("Handles shifts that go past the end of the alphabet", () => {
        const actual = caesar("zyxwvut", 9);
        const expected = "ihgfedc";
        expect(actual).to.equal(expected);
    });
    it("Maintains spaces and other nonalphabetic symbols in the message", () => {
        const actual = caesar("q('.')p", 7);
        const expected = "x('.')w";
        expect(actual).to.equal(expected);
    })
});