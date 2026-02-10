import express from 'express';
import Bird from '../Models/birdSchema.js';

const router = express.Router();

router
    .route('/')
    .post(async (req, res) => {
        let newBird = await Bird.create(req.body);

        res.json(newBird)
    })
    .get(async (req, res) => {
        let allBird = await Bird.find({});

        res.json(allBird);
    });


    export default router;