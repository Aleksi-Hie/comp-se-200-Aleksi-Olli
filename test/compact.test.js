import chai from "chai"
import mocha from "mocha"
import compact from "../src/compact.js"

const expect = chai.expect
describe("compact",()=>{
    it("Remove all false or null values from array", ()=>{
        const arr_ = [0, 1, false, 2, '', 3]
        expect(compact(arr_)).to.eql([1, 2, 3])
    })
    it("All real values", ()=>{
        const arr_ = [1, 2, 3]
        expect(compact(arr_)).to.eql([1, 2, 3])
    })
    it("All null values", ()=>{
        const arr_ = [null, null, null]
        expect(compact(arr_)).to.eql([])
    })
    it("Invalid array", ()=>{
        const arr_ = null
        expect(compact(arr_)).to.eql([])
    })
    it("Empty array", ()=>{
        const arr_ = []
        expect(compact(arr_)).to.eql([])
    })
    }
)