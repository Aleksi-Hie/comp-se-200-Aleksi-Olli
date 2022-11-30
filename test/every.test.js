import chai from "chai"
import every from "../src/every.js"

const expect = chai.expect;

function alwaysFalse(value, indx, array){
	return value != array[indx];
}

function alwaysTrue(value, indx, array){
	return value == array[indx];
}

function firstFalse(value, indx, array){
	if(indx == 0){
		return false;
	}
	return true;
}

function lastFalse(value, indx, array){
	if(indx == array.length -1 ){
		return false;
	}
	return true;
}

const array = [1,2,3,4,5,6];
const emptyArray = null;

describe("every", () => {
	it("always false", () => {
		expect(every(array, alwaysFalse)).to.equal(false)
	});
	it("always true", () => {
		expect(every(array, alwaysTrue)).to.equal(true)
	});
	it("first element False", () => {
		expect(every(array, firstFalse)).to.equal(false)
	});
	it("last element False", () => {
		expect(every(array, lastFalse)).to.equal(false)
	});
	it("empty array", () => {
		expect(every(emptyArray, alwaysFalse)).to.equal(true)
		expect(every(emptyArray, alwaysTrue)).to.equal(true)
	});

})