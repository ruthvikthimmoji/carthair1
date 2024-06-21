import connectMongoDB from "@/libs/mongodb";
import Customer from "@/model/customers";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
const{id} = params;
const{newName:name, newPhonenumber:phonenumber , newDate:date , newServices:services,newAttendant:attendant}= await request.json();
await connectMongoDB();
await Customer.findByIdAndUpdate(id,{name,phonenumber,date,services,attendant});
return NextResponse.json({message:"customer Updated"},{status:200})
};


export async function GET( request,{params}){
    const {id} = params;
    await connectMongoDB();
   const customer = await Customer.findOne({_id: id});
   return NextResponse.json({customer},{status:200})


}