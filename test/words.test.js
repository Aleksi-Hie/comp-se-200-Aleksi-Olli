import chai from "chai"
import words from "../src/words.js"

const expect = chai.expect

const input1 = "a b c"
const output1 = ['a', 'b', 'c']

const input2 = "long word test"
const regExp2 = /word/
const output2 = ["word"]



describe("words", () => {
    it("null reference", () => {
		expect(words(null)).to.deep.equal([])
	});
    it("empty string", () => {
		expect(words("")).to.deep.equal([])
	});
    it("single letter words, no pattern", () => {
		expect(words(input1)).to.deep.equal(output1)
	});

    it("longer words with pattern", () => {
		expect(words(input2, regExp2)).to.deep.equal(output2)
	});

})
