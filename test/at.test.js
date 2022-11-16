import chai from "chai"
import at from "../src/at.js"
const expect = chai.expect

describe("At",()=>{
    it("Should pick all objects"), ()=>{
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.equal([3,4])
        
    }
})
