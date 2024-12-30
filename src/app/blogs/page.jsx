import React, { cache } from "react";
import Link from "next/link";

async function getBlogs() {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return await res.json();
  
  } catch (error) {
    console.log("Error loading topics:", error);
    return []
  }
}

const  page = async () => {

  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-10 ">
      {Array.isArray(blogs) && blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-background rounded-lg shadow-sm p-6 space-y-4"
        >
          {/* <div className="relative w-full aspect-video mb-4">
                <Image
                  src={`/blog-${item}.jpg`}
                  alt={`Featured post ${item}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div> */}
          <div className="space-y-2">
            <span className="text-sm text-muted-foreground">Dec 1, 2023</span>
            <h3 className="text-xl font-semibold text-foreground">
              {blog.title}
            </h3>
            <p className="text-muted-foreground text-ellipsis">
              {blog.content}
            </p>
            <Link
                  href={`/blog/123`}
                  className="text-primary hover:text-primary/80"
                >
                  Read More →
                </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
