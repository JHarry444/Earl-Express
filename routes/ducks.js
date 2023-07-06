const router = require("express").Router();
const { duckModel } = require("../db/schemas");

router.post("/create", async ({ body }, res, next) => {
    try {
        const created = await duckModel.create(body);
        return res.status(201).json(created);
    } catch (err) {
        return next(err)
    }
})

router.get("/getAll", async (req, res, next) => {
    try {
        const found = await duckModel.find();
        return res.json(found);
    } catch (err) {
        return next(err)
    }
});

router.get("/get/:id", async ({ params: { id } }, res, next) => {
    try {
        const found = await duckModel.findById(id);
        return res.json(found);
    } catch (err) {
        return next(err)
    }
});

router.put("/update/:id", async ({ params: { id }, query }, res, next) => {
    try {
        const updated = await duckModel.findByIdAndUpdate(id, query, {
            returnOriginal: false
        });
        return res.json(updated);
    } catch (err) {
        return next(err)
    }
});

router.delete("/remove/:id", async ({ params: { id } }, res, next) => {
    try {
        const removed = await duckModel.findByIdAndDelete(id);
        return res.json(removed);
    } catch (err) {
        return next(err)
    }
});

module.exports = router;