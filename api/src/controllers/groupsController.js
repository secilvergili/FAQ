import Group from "../models/groupsModel.js";
import Article from "../models/articleModel.js";


// ✅ CATEGORY → GROUPS + ARTICLES
export const getGroupsWithArticles = async (req, res) => {
  try {
    const { categoryId } = req.params;

    const groups = await Group.find({ categoryId });
    const articles = await Article.find({ categoryId });

    const result = groups.map(group => {
      const groupArticles = articles.filter(
        a => a.groupId.toString() === group._id.toString()
      );

      return {
        ...group._doc,
        articles: groupArticles
      };
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// ✅ GROUP → SINGLE + ARTICLES
export const getSingleGroupWithArticles = async (req, res) => {
  try {
    const { id } = req.params;

    const group = await Group.findById(id);
    const articles = await Article.find({ groupId: id });

    res.json({
      ...group._doc,
      articles
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};