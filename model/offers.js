import { Schema } from "mongoose";


const OfferSchema = new Schema(
    {
        title: String,
        description: String,
        isActive: String
    },
    {
        timestamps: true,
    }
);


export default OfferSchema;