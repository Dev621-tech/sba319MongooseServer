import Mammal from '../Models/mammalSchema.js';

const createAMammal = (async (req, res) => {
        let newMammal = await Mammal.create(req.body);

        res.json(newMammal);
    })

const showAllMammal = (async (req, res) => {
        let allMammal = await Mammal.find({});

        res.json(allMammal);
    })

const updateAMammal = (async (req, res) => {
        let updatedMammal = await Mammal.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedMammal) return res.status(404).json({ error: "Mammal NOT FOUND !" });

        res.json(updatedMammal);
    })

const deleteAMammal = (async (req, res) => {
        let deletedMammal = await Mammal.findByIdAndDelete(req.params.id);

        if (!deletedMammal) return res.status(404).json({ error: "Mammal NOT FOUND !" });

        res.json(deletedMammal);
    })

const showOneMammal = (async (req, res) => {
        let oneMammal = await Mammal.findById(req.params.id);

        if (!oneMammal) return res.status(404).json({ error: "Mammal NOT FOUND !" });

        res.json(oneMammal);
    })

export default { createAMammal, showAllMammal, updateAMammal, deleteAMammal, showOneMammal}