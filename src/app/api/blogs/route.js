import connentDB from "../../../db/index.js";
import { Blog } from "../../../models/blog.model.js";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, metadata, content} =  await req.json();
    await connentDB();
    await Blog.create({title, metadata, content});
    return NextResponse.json({message:"Blog Created"},{status: 201});
}

export async function GET(){
    await connentDB();
    const blogs = await Blog.find({});
    return NextResponse.json(blogs);
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await connentDB();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({message:"Blog Deleted"},{status: 200});
}