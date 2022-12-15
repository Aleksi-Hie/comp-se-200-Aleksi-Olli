import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect;

function alwaysFalse(value, indx, array){
	return value != array[indx];
}

function alwaysTrue(value, indx, array){
	return value == array[indx];
}

function firstAndLast(value, indx, array){
	if(indx == 0 || indx == array.length -1){
		return true;
	}
	return false;
}

function middleElements(value, indx, array){
    if(indx == 0 || indx == array.length -1){
        return false;
    }
    return true;
}


const array = [1,2,3,4,5,6];
const middles = [2,3,4,5];
const emptyArray = [[]];

describe("filter", () => {

	it("No elements pass", () => {
		expect(filter(array, alwaysFalse)).to.deep.equal(emptyArray)
	});
	it("all elements pass", () => {
		expect(filter(array, alwaysTrue)).to.deep.equal(array)
	});
	it("first and last element pass", () => {
		expect(filter(array, firstAndLast)).to.deep.equal([array[0], array[array.length-1]])
	});
    it("exclude first and last", () => {
		expect(filter(array, middleElements)).to.deep.equal(middles)
	});
    it("empty array as input", () => {
		expect(filter(emptyArray, alwaysFalse)).to.deep.equal(emptyArray)
        expect(filter(emptyArray, alwaysTrue)).to.deep.equal(emptyArray)
	});
	it("null as input", () => {
		expect(filter(null, alwaysFalse)).to.deep.equal(emptyArray)
        expect(filter(null, alwaysTrue)).to.deep.equal(emptyArray)
	});



})
