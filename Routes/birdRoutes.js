import express from 'express';
import Bird from '../Models/birdSchema.js';

const router = express.Router();

router
    .route('/')
    // @route: POST /api/bird
    // @desc: Create A New Bird Route
    .post(async (req, res) => {
        let newBird = await Bird.create(req.body);

        res.json(newBird)
    })
    // @route: GET /api/bird
    // @desc: Show All Birds Route
    .get(async (req, res) => {
        let allBird = await Bird.find({});

        res.json(allBird);
    });

router
    .route('/:id')
    // @route PUT /api/bird
    // @desc: Update A Bird Route
    .put(async (req, res) => {
        let updatedBird = await Bird.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedBird) return res.status(404).json({ error: "Bird NOT FOUND !" });

        res.json(updatedBird);
    })
    // @route: DELETE /api/bird
    // @desc: Delete A Bird Route
    .delete(async (req, res) => {
        let deletedBird = await Bird.findByIdAndDelete(req.params.id);

        if (!deletedBird) return res.status(404).json({ error: "Bird NOT FOUND !" });

        res.json(deletedBird);
    })
    // @route: GET /api/bird
    // @desc: Get A Bird By Id Route
    .get(async (req, res) => {
        let oneBird = await Bird.findById(req.params.id);

        if (!oneBird) return res.status(404).json({ error: "Bird NOT FOUND !" });

        res.json(oneBird);
    })


export default router;