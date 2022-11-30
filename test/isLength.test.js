import chai from "chai"
import isLength from "../src/isLength.js"

const MAX_VALUE = Number.MAX_SAFE_INTEGER // 2**53 - 1 

const expect = chai.expect


describe("isLength", () => {
    it("lower bound", () => {
		expect(isLength(0)).to.equal(true)
	});
    it("out of lower bound", () => {
		expect(isLength(-1)).to.equal(false)
	});
    
    it("upper bound", () => {
		expect(isLength(MAX_VALUE)).to.equal(true)
	});
    it("out of upper bound", () => {
		expect(isLength(MAX_VALUE + 1)).to.equal(false)
	});

	it("middle of range", () => {
		expect(isLength(2**32)).to.equal(true)
	});
	it("very negative", () => {
		expect(isLength(Number.MIN_SAFE_INTEGER)).to.equal(false)
	});
	it("Too large value", () => {
		expect(isLength(Number.MAX_INTEGER)).to.equal(false)
	});
	it("null value", () => {
		expect(isLength(Number.MAX_INTEGER)).to.equal(false)
	});
})

