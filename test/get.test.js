import chai from "chai"
import get from "../src/get.js"

const expect = chai.expect;

const object = { 'a': [{ 'b': { 'c': 3 } }] }

const defVal = "default"

describe("get", () => {
    it("example", () => {
		expect(get(object, 'a[0].b.c', defVal)).to.deep.equal(3)
	});
    it("not found", () => {
		expect(get(object, 'a[1].b.c', defVal)).to.deep.equal(defVal)
	});
    it("null object", () => {
		expect(get(null, 'a[1].b.c', defVal)).to.deep.equal(defVal)
	});
})

