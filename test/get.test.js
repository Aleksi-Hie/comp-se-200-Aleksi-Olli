import chai from "chai"
import get from "../src/get.js"

const expect = chai.expect;

const object = { 'a': [{ 'b': { 'c': 3 } }] }

const complexObject = { 'a': [{ 'b': { 'c': [1,2,3] } }, {d:[4,5,6], e:[7,8,9]}] }
const path1 = 'a[0].b.c[2]'
const path2 = 'a[1].e[1]'
const path3 = 'a[1].d'

const defVal = "default"

describe("get", () => {
    it("simple example", () => {
		expect(get(object, 'a[0].b.c', defVal)).to.deep.equal(3)
	});
    it("not found", () => {
		expect(get(object, 'a[0].b.d', defVal)).to.deep.equal(defVal)
	});
	it("too large index", () => {
		expect(get(object, 'a[1]', defVal)).to.deep.equal(defVal)
	});
    it("null object", () => {
		expect(get(null, 'a[1].b.c', defVal)).to.deep.equal(defVal)
	});
	it("more complex searches", () => {
		expect(get(complexObject, path1, defVal)).to.deep.equal(3)
		expect(get(complexObject, path2, defVal)).to.deep.equal(8)
		expect(get(complexObject, path3, defVal)).to.deep.equal([4,5,6])
	});
	it

})

