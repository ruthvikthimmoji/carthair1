import connectMongoDB from "@/libs/mongodb";
import CustomerSchema from "@/model/customers";
import { NextResponse } from "next/server";

const conn = await connectMongoDB();
const db = conn.connection.useDb("customers_db");
const Customer = db.model("Customer", CustomerSchema);

export async function PUT(request, { params }) {
    const { id } = params;
    const newCustomer = await request.json();
    await Customer.findByIdAndUpdate(id, newCustomer);
    return NextResponse.json({ message: "customer Updated" }, { status: 200 })
};


export async function GET(request, { params }) {
    const { id } = params;
    const customer = await Customer.findOne({ _id: id });
    return NextResponse.json({ customer }, { status: 200 })


}