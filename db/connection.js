const mongoose = require("mongoose");

const db = process.env.ENV == "test" ? "test-earl" : "earl";
console.log("DB:", db);

module.exports = {
    connect: () => mongoose.connect(`mongodb://127.0.0.1:27017/${db}`),
    disconnect: async function () {
        try {
            await mongoose.disconnect();
            console.error("Disconeected from db");
        } catch (err) {
            console.error("Dis-Connection failed");
        }
    }
}