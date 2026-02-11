import express from 'express';
import Bird from '../Models/birdSchema.js';
import birdCTRL from '../Controllers/birdControllers.js'

const router = express.Router();

router
    .route('/')
    // @route: POST /api/bird
    // @desc: Create A New Bird Route
    .post(birdCTRL.createABird)
    // @route: GET /api/bird
    // @desc: Show All Birds Route
    .get(birdCTRL.showAllBirds)

router
    .route('/:id')
    // @route PUT /api/bird
    // @desc: Update A Bird Route
    .put(birdCTRL.updateABird)
    // @route: DELETE /api/bird
    // @desc: Delete A Bird Route
    .delete(birdCTRL.deleteABird)
    // @route: GET /api/bird
    // @desc: Get One Bird By Id Route
    .get(birdCTRL.showOneBird)

export default router;