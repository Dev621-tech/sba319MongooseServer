import Bird from '../Models/birdSchema.js';

const createABird = (async (req, res) => {
    let newBird = await Bird.create(req.body);

    res.json(newBird);
})

const showAllBirds = (async (req, res) => {
    let allBird = await Bird.find({});

    res.json(allBird);
});

const updateABird = (async (req, res) => {
    let updatedBird = await Bird.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedBird) return res.status(404).json({ error: "Bird NOT FOUND !" });

    res.json(updatedBird);
})

const deleteABird = (async (req, res) => {
    let deletedBird = await Bird.findByIdAndDelete(req.params.id);

    if (!deletedBird) return res.status(404).json({ error: "Bird NOT FOUND !" });

    res.json(deletedBird);
})

const showOneBird = (async (req, res) => {
    let oneBird = await Bird.findById(req.params.id);

    if (!oneBird) return res.status(404).json({ error: "Bird NOT FOUND !" });

    res.json(oneBird);
})

export default { createABird, showAllBirds, updateABird, deleteABird, showOneBird }