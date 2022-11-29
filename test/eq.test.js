import chai from "chai"
import mocha from "mocha"
import eq from "../src/eq.js"

const expect = chai.expect
describe("eq",()=>{
    it("Object equality", ()=>{
        const object = { 'a': 1 }
        expect(eq(object, object)).to.eql(true)
    })
    it("Object inequality", ()=>{
        const object = { 'a': 1 }
        const other = { 'a': 1 }
        expect(eq(object, other)).to.eql(false)
    })
    it("Char comparison", ()=>{
        const object = 'a'
        const other = 'a'
        expect(eq(object, other)).to.eql(true)
    })
    it("Char and object", ()=>{
        const object = 'a'
        const other = { 'a': 1 }
        expect(eq(object, other)).to.eql(false)
    })
    it("Invalid object", ()=>{
        const object = null
        const other = { 'a': 1 }
        expect(eq(object, other)).to.eql(false)
    })
    it("Invalid other", ()=>{
        const object = { 'a': 1 }
        const other = null
        expect(eq(object, other)).to.eql(false)
    })
    it("Invalid object and other", ()=>{
        const object = null
        const other = null
        expect(eq(object, other)).to.eql(true)
    })
})