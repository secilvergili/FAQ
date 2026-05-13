import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";

import Category from "../models/categoryModel.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");

    const data = fs.readFileSync(
      new URL("./category.json", import.meta.url)
    );
    const categories = JSON.parse(data);

    await Category.deleteMany();
    await Category.insertMany(categories);

    console.log("Categories seeded ✅");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();