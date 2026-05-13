/// models/Category.js
import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    icon: String,

    title: {
      type: String,
      required: true,
    },

    lastUpdated: {
      type: Date,
      default: Date.now,
}
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
