import mongoose from "mongoose";

const dbConnect = async ()=>{
    try {
        const connect =await mongoose.connect(process.env.Mongodb);
        console.log("connected to database.")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    
}
export default dbConnect