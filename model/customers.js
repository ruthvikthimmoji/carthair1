import mongoose, { Schema } from "mongoose";


const customerSchema = new Schema(
    {
        name: String,
        phonenumber: String,
        date: String,
        attendant: String,
        services: String
    },
    {
        timestamps: true,
    }
);

const Customer = mongoose.models?.Customer || mongoose.model("Customer", customerSchema);


export default Customer;