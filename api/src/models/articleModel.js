import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    // 🧠 HTML içerik (editor / rich text)
    content: {
      type: String,
      required: true,
    },

    icon: String,

    // 🔗 hangi category
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    // 🔗 hangi group
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },

    createdBy: String,
    updatedBy: String,

    // 👍 kullanıcı feedback
    helpfulCount: {
      type: Number,
      default: 0,
    },

    notHelpfulCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Article", ArticleSchema);