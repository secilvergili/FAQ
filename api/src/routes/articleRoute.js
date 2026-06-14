import express from "express";
import Article from "../models/articleModel.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";
import {
  getArticles,
  getArticleById,
} from "../controllers/articleController.js";

const router = express.Router();

// 🔹 Tüm makaleler (filter ile)
router.get("/", getArticles);

// 🔹 Tek makale
router.get("/:id", getArticleById);

router.post(
  "/",
  verifyToken,
  isAdmin,
  async (req, res) => {
    console.log(req.body)
  try {
    const newArticle = new Article(req.body);
    console.log("NEW ARTICLE:", newArticle);
    const savedArticle = await newArticle.save();

    res.status(201).json(savedArticle);
  } catch (error) {
    console.log("CREATE ARTICLE ERROR:", error);
  
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete(
  "/:id",
  verifyToken,
  isAdmin,
  async (req, res) => {
    try {
      const deletedArticle = await Article.findByIdAndDelete(req.params.id)

    if(!deletedArticle) {
      return res.status(404).json({message: "Article not found", });
    }
    res.status(200).json({message: "Article deleted successfully",});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
   router.put(
    "/:id",
    verifyToken,
    isAdmin,
    async (req, res) => {
      try {
        const updatedArticle = await Article.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
  
        )
        if (!updatedArticle) {
          return res.status(404).json({
            message: "Article not found",
      });
    
        }
        res.status(200).json(updatedArticle);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  );

export default router;