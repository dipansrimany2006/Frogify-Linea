"use client";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useState } from "react";
import Image from "next/image";
import MarkdownPreview from "@uiw/react-markdown-preview"; // You'll need to install this package

export default function BlogCreation() {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    content: "",
  });
  const [isPreview, setIsPreview] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setBlogData({ ...blogData, coverImage: file });
  //     setImagePreview(URL.createObjectURL(file));
  //   }
  // };

  const handelSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Create New Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Share your thoughts with the world
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          {!isPreview ? (
            <div className="space-y-6">
              {/* Cover Image Upload */}
              {/* <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Cover Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg">
                  {imagePreview ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={imagePreview}
                        alt="Cover preview"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 dark:text-gray-300">
                        <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div> */}

              {/* Blog Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Blog Title
                </label>
                <Input
                  onChange={(e) =>
                    setBlogData({ ...blogData, title: e.target.value })
                  }
                  value={blogData.title}
                  className="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Enter your blog title"
                />
              </div>

              {/* Blog Content */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Blog Content (Markdown)
                </label>
                <Textarea
                  onChange={(e) =>
                    setBlogData({ ...blogData, content: e.target.value })
                  }
                  value={blogData.content}
                  className="w-full min-h-[400px] bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono"
                  placeholder="Write your blog content using Markdown..."
                />
              </div>
            </div>
          ) : (
            <div className="prose dark:prose-invert max-w-none">
              {imagePreview && (
                <div className="relative w-full h-64 mb-6">
                  <Image
                    src={imagePreview}
                    alt="Cover preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <h1>{blogData.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {blogData.description}
              </p>
              <MarkdownPreview source={blogData.content} />
            </div>
          )}

          <div className="flex justify-end gap-4 mt-6">
            <Button
              onClick={() => setIsPreview(!isPreview)}
              variant="outline"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            >
              {isPreview ? "Edit" : "Preview"}
            </Button>
            <Button className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900">
              Publish Blog
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
