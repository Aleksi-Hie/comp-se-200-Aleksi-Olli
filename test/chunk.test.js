import chai from "chai"
import mocha from "mocha"
import chunk from "../src/chunk.js"

const expect = chai.expect
describe("chunk",()=>{
    it("Split array in half", ()=>{
        const arr_ = ['a', 'b', 'c', 'd'];
        expect(chunk(arr_, 2)).to.eql([['a', 'b'], ['c', 'd']])
    })
    it("Split array in uneven sizes", ()=>{
        const arr_ = ['a', 'b', 'c', 'd']
        expect(chunk(arr_, 3)).to.eql([['a', 'b', 'c'], ['d']])
    })
    it("Bigger chunk size than array", ()=>{
        const arr_ = ['a', 'b', 'c', 'd']
        expect(chunk(arr_, 5)).to.eql([['a', 'b', 'c', 'd']])
    })
    it("Invalid array", ()=>{
        const arr_ = null
        expect(chunk(arr_, 2)).to.eql([])
    })
    it("Invalid chunk size", ()=>{
        const arr_ = ['a', 'b', 'c', 'd']
        expect(chunk(arr_, null)).to.eql([])
    })
    it("Invalid array and chunk size", ()=>{
        const arr_ = null
        expect(chunk(arr_, null)).to.eql([])
    })
    it("Negative chunk size", ()=>{
        const arr_ = ['a', 'b', 'c', 'd']
        expect(chunk(arr_, -2)).to.eql([])
    })
    it("Zero chunk size", ()=>{
        const arr_ = ['a', 'b', 'c', 'd']
        expect(chunk(arr_, 0)).to.eql([])
    })



})