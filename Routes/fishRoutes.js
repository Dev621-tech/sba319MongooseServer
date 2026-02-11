import express from 'express';
import fishCTRL from "../Controllers/fishControllers.js";

const router = express.Router();

router
    .route('/')
    // @route: POST /api/fish
    // @desc: Create A New Fish Route
    .post(fishCTRL.createAFish)
    // @route: GET /api/fish
    // @desc: Show All Fish Route
    .get(fishCTRL.showAllFish)

router
    .route('/:id')
    // @route: PUT /api/fish
    // @desc: Update A Fish Route
    .put(fishCTRL.updateAFish)
    // @route: DELETE /api/fish
    // @desc: Delete A Fish Route
    .delete(fishCTRL.deleteAFish)
    // @route: GET /api/fish
    // @desc: Get One Fish By Id Route
    .get(fishCTRL.showOneFish)

export default router;