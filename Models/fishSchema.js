import mongoose from 'mongoose';

const fishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        message: 'No Value Submitted For name'
    },
    alias: {
        type: String
    },
    lifespanInYears: {
        type: Number,
        required: true
    },
    diet: {
        type: [String],
        default: 'Unknown'
    },
    habitat: {
        type: String,
        required: true,
        message: 'No Value Submitted For habitat'
    },
    isFreshwater: {
        type: Boolean,
        required: true,
        message: 'No Value Submitted For isFreshwateer'
    }

},
    { timestamps: true }
);

// Index
fishSchema.index({ lifespanInYears: 1 });

export default mongoose.model('Fish', fishSchema);