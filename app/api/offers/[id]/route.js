import connectMongoDB from "@/libs/mongodb";
import OfferSchema from "@/model/offers";
import { NextResponse } from "next/server";

const conn = await connectMongoDB();
const db = conn.connection.useDb("offers_db");
const Offer = db.model("Offer", OfferSchema);

export async function PUT(request, { params }) {
    const { id } = params;
    const newOffer = await request.json();
    await Offer.findByIdAndUpdate(id, newOffer);
    return NextResponse.json({ message: "Offer Updated" }, { status: 200 })
};


export async function GET(request, { params }) {
    const { id } = params;
    const offer = await Offer.findOne({ _id: id });
    return NextResponse.json({ offer }, { status: 200 })


}