import mongoose, { connect } from "mongoose";


const connectMongoDB = async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to the DB")
        
    } catch (error) {
        console.log(error)
        
    }
}
export default connectMongoDB;