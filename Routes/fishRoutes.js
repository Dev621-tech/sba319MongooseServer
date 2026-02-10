import express from 'express';
import Fish from '../Models/fishSchema.js';

const router = express.Router();

router
    .route('/')
    // @route: POST /api/fish
    // @desc: Create A New Fish Route
    .post(async (req, res) => {
        let newFish = await Fish.create(req.body);

        res.json(newFish);
    })
    // @route: GET /api/fish
    // @desc: Show All Fish Route
    .get(async (req, res) => {
        let allFish = await Fish.find({});

        res.json(allFish);
    })

router
    .route('/:id')
    // @route: PUT /api/fish
    // @desc: Update A Fish Route
    .put(async (req, res) => {
        let updatedFish = await Fish.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedFish) return res.status(404).json({ error: "Fish NOT FOUND !" });

        res.json(updatedFish);
    })
    // @route: DELETE /api/fish
    // @desc: Delete A Fish Route
    .delete(async (req, res) => {
        let deletedFish = await Fish.findByIdAndDelete(req.params.id);

        if (!deletedFish) return res.status(404).json({ error: "Fish NOT FOUND !" });

        res.json(deletedFish);
    })
    // @route: GET /api/fish
    // @desc: Get One Fish By Id Route
    .get(async (req, res) => {
        let oneFish = await Fish.findById(req.params.id);

        if (!oneFish) return res.status(404).json({ error: "Fish NOT FOUND !" });

        res.json(oneFish);
    })

export default router;