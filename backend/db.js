import mongoose from "mongoose";

async function connectDb() {
    //await mongoose.connect('connection string from atlas')
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error)
    }
}
export default connectDb