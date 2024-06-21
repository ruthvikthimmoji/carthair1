import connectMongoDB from "@/libs/mongodb";
import Customer from "@/model/customers";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { name, phonenumber, date, services, attendant } = await request.json()
    await connectMongoDB();
    await Customer.create({ name, phonenumber, date, services, attendant });
    return NextResponse.json({ message: "customer created" }, { status: 201 })
};

export async function GET(){
    await connectMongoDB();
    const customers = await Customer.find();
    return NextResponse.json({customers});
};

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Customer.findByIdAndDelete(id);
    return NextResponse.json({message:"topic deleted"},{status:200})

}