import chai from "chai"
import mocha from "mocha"
import difference from "../src/difference.js"

const expect = chai.expect
describe("difference",()=>{
    it("Difference of 2 arrays", ()=>{
        const arr1 = [2,1]
        const arr2 = [2,3]
        expect(difference(arr1,arr2)).to.eql([1])
    })
    it("Difference of same array", ()=>{
        const arr1 = [2,1]
        const arr2 = [2,1]
        expect(difference(arr1,arr2)).to.eql([])
    })
    it("First array bigger", ()=>{
        const arr1 = [2,1,4,5]
        const arr2 = [2,3]
        expect(difference(arr1,arr2)).to.eql([1,4,5])
    })
    it("Second array bigger", ()=>{
        const arr1 = [2,1]
        const arr2 = [2,3,4,5]
        expect(difference(arr1,arr2)).to.eql([1])
    })
    it("Invalid first array", ()=>{
        const arr1 = null
        const arr2 = [2,3,4,5]
        expect(difference(arr1,arr2)).to.eql([])
    })
    it("Invalid second array", ()=>{
        const arr1 = [2,1]
        const arr2 = null
        expect(difference(arr1,arr2)).to.eql([2,1])
    })
    it("Invalid both arrays", ()=>{
        const arr1 = null
        const arr2 = null
        expect(difference(arr1,arr2)).to.eql([])
    })
    it("Multiple arrays to exclude", ()=>{
        const arr1 = [2,1]
        const arr2 = [2,3]
        const arr3 = [1,4]
        expect(difference(arr1,arr2,arr3)).to.eql([])
    })

})