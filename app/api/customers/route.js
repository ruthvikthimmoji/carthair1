import connectMongoDB from "@/libs/mongodb";
import CustomerSchema from "@/model/customers";
import { NextResponse } from "next/server";


const conn = await connectMongoDB();
const db = conn.connection.useDb("customers_db");
const Customer = db.model("Customer", CustomerSchema);

export async function POST(request) {
    const { name, phonenumber, date, services, attendant } = await request.json()
    await Customer.create({ name, phonenumber, date, services, attendant });
    return NextResponse.json({ message: "customer created" }, { status: 201 })
};

export async function GET(){

    const customers = await Customer.find({}).exec();
    return NextResponse.json({customers});
};

export async function DELETE(request){

    const id = request.nextUrl.searchParams.get('id');
    await Customer.findByIdAndDelete(id);
    return NextResponse.json({message:"topic deleted"},{status:200})

}
