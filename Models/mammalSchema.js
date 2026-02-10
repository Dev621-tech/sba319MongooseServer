import mongoose from 'mongoose';

const mammalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        message: 'No Value Submitted For name'
    },
    bodyCovering: {
        type: String,
        enum: ['Fur', 'Hair', 'Skin', 'Other'],
        default: 'Other'
    },
    lifespanInYears: {
        type: Number
    },
    isNocturnal: {
        type: Boolean,
        default: false
    },
    habitat: {
        type: String,
        required: true,
        message: 'No Value Submitted For habitat'

    },
    nativeRegion: {
        type: [String],
        required: true,
        message: 'No Value Submitted For nativeRegion'
    }

},
    { timestamps: true }
);

// Index
mammalSchema.index({ lifespanInYears: 1 });

export default mongoose.model('Mammal', mammalSchema);