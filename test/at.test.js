import chai from "chai"
import at from "../src/at.js"
const expect = chai.expect

const expect = chai.expect

describe("at", () => {
    it("Valid object", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3, 4])
    })
    it("Invalid object", () => {
        expect(at(null, ['a[0].b.c', 'a[1]'])).to.eql([])
    })
    it("Invalid path", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
<<<<<<< HEAD
        expect(at(object, ['a[0].b.c', 'a[1]'])).to.equal([3,4])
        
    }
=======
        expect(at(object, null)).to.eql([])
    })
    it("Invalid object and path", () => {
        expect(at(null, null)).to.eql([])
    })
    it("Multiple paths", () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
        expect(at(object, ['a[0].b.c', 'a[1]'], ['a[0].b.c', 'a[1]'])).to.eql([3, 4, 3, 4])
    })

>>>>>>> bfb4058e2a52f0f1be0ecc35f4dd62903a15557a
})
