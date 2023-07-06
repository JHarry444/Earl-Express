const { expect } = require("chai");

describe("test suite", () => {
    it("should equal 2", () => {
        expect(1 + 1).to.equal(2);
    });
    it("should equal 4", () => {
        expect(2 + 2).to.equal(4);
    });
    it("should equal 3", () => {
        expect(1 + 1).to.equal(3);
    });
})