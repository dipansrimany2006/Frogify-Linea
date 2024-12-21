import { Blog } from "../../../../models/blog.model";
import connentDB from "../../../../db/index.js";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    const {id} = params;
    const {newTitle: title, newMetadata: metadata, newContent: content} =  await req.json();
    await connentDB();
    await Blog.findByIdAndUpdate(id, {title, metadata, content});
    return NextResponse.json({message: "Blog updated successfully"},{status: 200});
}