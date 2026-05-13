import express from "express";
import Group from "../models/groupsModel.js";
import { getGroupsWithArticles, getSingleGroupWithArticles } from "../controllers/groupsController.js";


const router = express.Router();


router.get("/category/:categoryId", getGroupsWithArticles);

router.get("/:id", getSingleGroupWithArticles);

// 🔹 categoryId’ye göre group getir
router.get("/", async (req, res) => {
  try {
    const { categoryId } = req.query;

    const groups = await Group.find({ categoryId });

    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newGroup = new Group(req.body);
    const savedGroup = await newGroup.save();

    res.status(201).json(savedGroup);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;