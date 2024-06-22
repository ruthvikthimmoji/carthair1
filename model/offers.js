import { Schema } from "mongoose";


const OfferSchema = new Schema(
    {
        title: String,
        description: String,
        isActive: Boolean
    },
    {
        timestamps: true,
    }
);


export default OfferSchema;