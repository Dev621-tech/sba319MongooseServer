import mongoose from 'mongoose';

const birdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        message: 'No Value Submitted For name'
    },
    feathers: {
        type: Boolean,
        default: true,
    },
    eggType: {
        type: String,
        required: true,
        enum: ['Hard Shell', 'Soft Shell'],
        message: 'Submitted An Incorrect Value For eggType'

    },
    numberOfEggsPerClutch: {
        type: Number,
        required: true,
        message: 'No Value Submitted For numberOfEggsPerClutch'
    },
    flightAbility: {
        type: Boolean,
        required: true,
        message: 'No Value Submitted For flightAbility',
    },
    nativeRegion: {
        type: [String],
        required: true,
        message: 'No Value Submitted For nativeRegion'
    }
},
{timestamps: true},
);

// Index
birdSchema.index({numberOfEggsPerClutch: 1});

export default mongoose.model('Bird', birdSchema);