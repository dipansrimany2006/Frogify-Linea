import connentDB from "../../../db/index.js";
import { Blog } from "../../../models/blog.model.js";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, metadata, content} =  await req.json();
    await connentDB();
    await Blog.create({title, metadata, content});
    return NextResponse.json({message:"Blog Created"},{status:"201"});
}

export async function GET(){
    await connentDB();
    const blogs = await Blog.find({});
    return NextResponse.json(blogs);
}

// More check safety code is here -->
// import connectDB from "../../../db/index.js";
// import { Blog } from "../../../models/blog.model.js";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//     try {
//         // Parse the request body
//         const body = await req.json();
        
//         // Destructure with validation
//         const { title, metadata, content } = body;
        
//         // Validate all required fields are strings and present
//         if (!title || typeof title !== 'string' || title.length > 100) {
//             return NextResponse.json(
//                 { error: "Title is required and must be less than 100 characters" },
//                 { status: 400 }
//             );
//         }

//         if (!metadata || typeof metadata !== 'string') {
//             return NextResponse.json(
//                 { error: "Metadata is required and must be a string" },
//                 { status: 400 }
//             );
//         }

//         if (!content || typeof content !== 'string' || content.length > 5000) {
//             return NextResponse.json(
//                 { error: "Content is required and must be less than 5000 characters" },
//                 { status: 400 }
//             );
//         }

//         // Connect to database
//         await connectDB();
        
//         // Create the blog post
//         const newBlog = await Blog.create({
//             title: title.trim(),
//             metadata,
//             content: content.trim()
//         });
        
//         // Return success response
//         return NextResponse.json(
//             { message: "Blog Created", blog: newBlog },
//             { status: 201 }
//         );
//     } catch (error) {
//         console.error('Error creating blog:', error);
        
//         // Check if it's a JSON parsing error
//         if (error instanceof SyntaxError && error.message.includes('JSON')) {
//             return NextResponse.json(
//                 { error: "Invalid JSON format in request body" },
//                 { status: 400 }
//             );
//         }
        
//         // Check for mongoose validation errors
//         if (error.name === 'ValidationError') {
//             return NextResponse.json(
//                 { error: error.message },
//                 { status: 400 }
//             );
//         }
        
//         // Generic error response
//         return NextResponse.json(
//             { error: "Failed to create blog post" },
//             { status: 500 }
//         );
//     }
// }