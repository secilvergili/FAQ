// models/groupsModel.js

import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    icon: String,

    title: {
      type: String,
      required: true,
    },

    description: String,

    articleCount: {
      type: Number,
      default: 0,
    },

    createdBy: String,
  },
  { timestamps: true }
);

export default mongoose.model("Group", GroupSchema);