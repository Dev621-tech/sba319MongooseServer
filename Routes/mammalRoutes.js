import express from 'express';
import mammalCTRL from "../Controllers/mammalControllers.js";

const router = express.Router();

router
    .route('/')
    // @route: POST /api/mammal
    // @desc: Create A New Mammal Route
    .post(mammalCTRL.createAMammal)
    // @route: GET /api/mammal
    // @desc: Show All Mammal Route
    .get(mammalCTRL.showAllMammal)

router
    .route('/:id')
    // @route: PUT /api/mammal
    // @desc: Update A Mammal Route
    .put(mammalCTRL.updateAMammal)
    // @route: DELETE /api/mammal
    // @desc: Delete A Mammal Route
    .delete(mammalCTRL.deleteAMammal)
    // @route: GET /api/mammal
    // @desc: Get One Mammal By Id Rouute
    .get(mammalCTRL.showOneMammal)

export default router;