import chai from "chai"
import mocha from "mocha"
import at from "../src/at.js"

describe("At",()=>{
    it("Should pick all objects"), ()=>{
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
        tested = at(object, ['a[0].b.c', 'a[1]'])
        control = [3,4]
        expect(tested).to.equal(control)
        
    }
})