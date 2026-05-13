import express from "express";
import Article from "../models/articleModel.js";
import {
  getArticles,
  getArticleById,
} from "../controllers/articleController.js";

const router = express.Router();

// 🔹 Tüm makaleler (filter ile)
router.get("/", getArticles);

// 🔹 Tek makale
router.get("/:id", getArticleById);

router.post("/", async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    const savedArticle = await newArticle.save();

    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;