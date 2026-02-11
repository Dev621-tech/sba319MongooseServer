import Fish from '../Models/fishSchema.js';

const createAFish = (async (req, res) => {
        let newFish = await Fish.create(req.body);

        res.json(newFish);
    })

const showAllFish = (async (req, res) => {
        let allFish = await Fish.find({});

        res.json(allFish);
    })

const updateAFish = (async (req, res) => {
        let updatedFish = await Fish.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedFish) return res.status(404).json({ error: "Fish NOT FOUND !" });

        res.json(updatedFish);
    })

const deleteAFish = (async (req, res) => {
        let deletedFish = await Fish.findByIdAndDelete(req.params.id);

        if (!deletedFish) return res.status(404).json({ error: "Fish NOT FOUND !" });

        res.json(deletedFish);
    })

const showOneFish = (async (req, res) => {
        let oneFish = await Fish.findById(req.params.id);

        if (!oneFish) return res.status(404).json({ error: "Fish NOT FOUND !" });

        res.json(oneFish);
    })

export default { createAFish, showAllFish, updateAFish, deleteAFish, showOneFish }