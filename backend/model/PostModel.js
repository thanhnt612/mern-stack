import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const PostModel = mongoose.model('Post', schema);