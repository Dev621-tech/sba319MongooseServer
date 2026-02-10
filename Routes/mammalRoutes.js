import express from 'express';
import Mammal from '../Models/mammalSchema.js';

const router = express.Router();

router
    .route('/')
    // @route: POST /api/mammal
    // @desc: Create A New Mammal Route
    .post(async (req, res) => {
        let newMammal = await Mammal.create(req.body);

        res.json(newMammal);
    })
    // @route: GET /api/mammal
    // @desc: Show All Mammal Route
    .get(async (req, res) => {
        let allMammal = await Mammal.find({});

        res.json(allMammal);
    })

router
    .route('/:id')
    // @route: PUT /api/mammal
    // @desc: Update A Mammal Route
    .put(async (req, res) => {
        let updatedMammal = await Mammal.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedMammal) return res.status(404).json({ error: "Mammal NOT FOUND !" });

        res.json(updatedMammal);
    })
    // @route: DELETE /api/mammal
    // @desc: Delete A Mammal Route
    .delete(async (req, res) => {
        let deletedMammal = await Mammal.findByIdAndDelete(req.params.id);

        if (!deletedMammal) return res.status(404).json({ error: "Mammal NOT FOUND !" });

        res.json(deletedMammal);
    })
    // @route: GET /api/mammal
    // @desc: Get One Mammal By Id Rouute
    .get(async (req, res) => {
        let oneMammal = await Mammal.findById(req.params.id);

        if (!oneMammal) return res.status(404).json({ error: "Mammal NOT FOUND !" });

        res.json(oneMammal);
    })

export default router;