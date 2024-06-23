import connectMongoDB from "@/libs/mongodb";
import OfferSchema from "@/model/offers";
import { NextResponse } from "next/server";

const conn = await connectMongoDB();
const db = conn.connection.useDb("offers_db");
const Offer = db.model("Offer", OfferSchema);

export async function POST(request) {
    const { title, description, isActive} = await request.json()
    await Offer.create({ title, description, isActive });
    return NextResponse.json({ message: "offer created" }, { status: 201 })
};

export async function GET(){
    
    const offers = await Offer.find({}).exec();
    return NextResponse.json({offers});
};

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await Offer.findByIdAndDelete(id);
    return NextResponse.json({message:"offer deleted"},{status:200})

}
