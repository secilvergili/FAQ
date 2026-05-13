import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";

import Category from "../models/categoryModel.js";
import Group from "../models/groupsModel.js";
import Article from "../models/articleModel.js";

dotenv.config();

const seedArticles = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");

    const data = fs.readFileSync(
      new URL("./article.json", import.meta.url)
    );
    
    const articles = JSON.parse(data);
    
    await Article.deleteMany();
    
    const newArticles = [];
    
    for (const item of articles) {
      const category = await Category.findOne({
        title: item.categoryTitle,
      });
    
      if (!category) {
        console.log("Category not found:", item.categoryTitle);
        continue;
      }
    
      const group = await Group.findOne({
        title: item.groupTitle,
        categoryId: category._id,
      });
    
      if (!group) {
        console.log("Group not found:", item.groupTitle);
        continue;
      }
    
      newArticles.push({
        title: item.title,
        content: item.content,
        icon: item.icon,
        categoryId: category._id,
        groupId: group._id,
        createdBy: item.createdBy,
      });
    }

    await Article.insertMany(newArticles);

    console.log("Articles seeded ✅");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedArticles();