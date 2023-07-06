let server;
const mongoose = require("mongoose");
const chai = require("chai");
const { connect } = require("../db/connection");
const { duckModel } = require("../db/schemas");
chai.use(require("chai-http"));
const { request, expect } = chai;

describe("CRUD tests", function () {
    // this.timeout(99_999); increases time taken for tests to timeout to dodge cloud issues
    before(async () => {
        try {
            await connect();
            console.log("Connected to db");
            server = require("../server");
        } catch (err) {
            console.error("Connection failed");
        }
    });
    let testDuck;
    beforeEach(async () => {
        await duckModel.deleteMany({});
        testDuck = await duckModel.create({
            name: "Tim",
            colour: "Black"
        });
        testDuck = JSON.parse(JSON.stringify(testDuck));
    })
    it("should get a duck", (done) => {
        request(server).get(`/ducks/get/${testDuck._id}`).end((err, res) => {
            expect(err).to.be.null;
            expect(res.body).to.deep.equal(testDuck);
            return done();
        })
    });
    it("should create a duck", (done) => {
        const newDuck = {
            name: "Donald Mallard",
            colour: "Blue"
        }
        request(server).post("/ducks/create").send(newDuck).end((error, response) => {
            expect(error).to.be.null;
            expect(response.body).to.deep.include(newDuck);
            expect(response.body).to.have.property("_id");
            return done();
        })
    });

    after(async () => {
        await mongoose.disconnect();
    })
})