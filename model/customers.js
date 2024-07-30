import { Schema } from "mongoose";


const CustomerSchema = new Schema(
    {
        name: String,
        phonenumber: String,
        email:String,
        date: String,
        attendant: String,
        services: String
    },
    {
        timestamps: true,
    }
);


export default CustomerSchema;