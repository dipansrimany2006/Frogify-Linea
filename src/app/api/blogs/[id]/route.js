import { Blog } from "../../../../models/blog.model";
import connentDB from "../../../../db/index.js";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newMetadata: metadata,
    newContent: content,
  } = await req.json();
  await connentDB();
  await Blog.findByIdAndUpdate(id, { title, metadata, content });
  return NextResponse.json(
    { message: "Blog updated successfully" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connentDB();
  const blog = await Blog.findOne({ _id: id });
  return NextResponse.json({ blog }, { status: 200 });
}
