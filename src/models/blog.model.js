import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },
    metadata: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      maxLength: 5000,
    },
  },
  {
    timestamps: true
  }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
