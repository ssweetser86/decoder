const polybius = require("../src/polybius").polybius;
const expect = require("chai").expect;

describe("Polybius", () => {
    it("should encode i and j to 42", () => {
        const expected = '4242';
        const actual = polybius('ij');
        expect(actual).to.equal(expected);
    });
    it("should translate 42 to (i/j)", () => {
        const expected = '(i/j)';
        const actual = polybius('42', false);
        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
        const actual = polybius("Hello world");
        const expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
    });
    it("maintains spaces in the message", () => {
        const actual = polybius("get gone", () => {
        const expected = '225144 22433351';
        expect(actual).to.equal(expected);
        });
    });
});