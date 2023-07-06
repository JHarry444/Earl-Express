const { connect } = require("./db/connection");

(async function () {
    try {
        await connect();
        console.log("Connected to db");
        require("./server");
    } catch (err) {
        console.error("Connection failed");
    }
})();