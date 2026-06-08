import Article from "../models/articleModel.js";

// 🔹 Tüm makaleler (opsiyonel filtreli)
export const getArticles = async (req, res) => {
  try {
    const { categoryId, groupId, search  } = req.query;
    
    const filter = {};

    if (categoryId) filter.categoryId = categoryId;
    if (groupId) filter.groupId = groupId;

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
      ];
    }

    const articles = await Article.find(filter).sort({ createdAt: -1 });

    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔹 Tek makale (detail sayfa)
export const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};