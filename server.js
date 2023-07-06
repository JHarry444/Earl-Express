const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log("I'm a middleware!");
    // next({status: 418, msg: "Not a kettle"});
    next();
})

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

const duckRouter = require("./routes/ducks");

app.use("/ducks", duckRouter);

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.msg || err);
})


const server = app.listen(4494, () => {
    console.log(`Server started successfully on port ${server.address().port}`);
});

module.exports = server;