import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";

import Category from "../models/categoryModel.js";
import Group from "../models/groupsModel.js";

dotenv.config();

const seedGroups = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");

    const data = fs.readFileSync(
      new URL("./groups.json", import.meta.url)
    );
    const groups = JSON.parse(data);

    await Group.deleteMany();

    const newGroups = [];

    for (const item of groups) {
      const category = await Category.findOne({
        title: item.categoryTitle.trim(),
      });

      if (!category) {
        console.log("Category not found:", item.categoryTitle);
        continue;
      }

      newGroups.push({
        categoryId: category._id,
        icon: item.icon,
        title: item.title,
        description: item.description,
        articleCount: item.articleCount,
        createdBy: item.createdBy,
      });
    }

    await Group.insertMany(newGroups);

    console.log("Groups seeded ✅");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedGroups();