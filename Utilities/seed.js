// Imported Libraries
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Import Models
import Bird from '../Models/birdSchema.js';
import Fish from '../Models/fishSchema.js';
import Mammal from '../Models/mammalSchema.js';

// Import Data
import birddata from './birddata.js';
import fishdata from './fishdata.js';
import mammaldata from './mammaldata.js'

// Setups
dotenv.config();
const connectionString = process.env.MONGO_URI || "";

async function seedDatabase() {
    console.log(`🏁 Starting Seed`)
    try {
        await mongoose.connect(connectionString);
        console.log(`✅ Connected To DB`)

        await Bird.deleteMany({});
        await Fish.deleteMany({});
        await Mammal.deleteMany({});
        console.log(`✅ Deleted Previous Data`)

        await Bird.create(birddata);
        await Fish.create(fishdata);
        await Mammal.create(mammaldata);
        console.log(`✅ Added New Data`)

        console.log(`🎊 Successfully Seeded`)
        process.exit(1);

    } catch (error) {
        console.error(err.message);
        process.exit(1)
    }
}

seedDatabase();