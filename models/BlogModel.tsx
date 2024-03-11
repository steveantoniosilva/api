import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BlogModel = mongoose.model('Blog', blogSchema);

export default BlogModel;
