import chai from "chai"
import mocha from "mocha"
import every from "../src/every.js"

const expect = chai.expect

describe("Every", () => {
	it("first test", () => {
		expect(every([true, 1, null, 'yes'], Boolean)).to.equal(false)
	});
})