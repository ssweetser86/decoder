const substitution = require("../src/substitution").substitution;
const expect = require("chai").expect;

describe("Substitution", () => {
    it("should return false if given solution is not exactly 26 characters", () => {
        const actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });
    it("should return false if given solution has duplicate characters", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual).to.be.false;
    });
    it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message, before and after encoding or decoding.", () => {
        const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne'
        expect(actual).to.equal(expected);
    });
    it("should handle symbols correctly as part of the cipher when encoding", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
    });
    it("should handle symbols correctly as part of the cipher when decoding", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
});









// substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
// substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
// substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

// substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
// substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

// substitution("thinkful", "short"); //> false
// substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
