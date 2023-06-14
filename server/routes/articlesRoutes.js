import express from "express";
import {
  createArticle,
  listArticles,
  deleteArticle,
} from "../controllers/articlesController.js";
const router = express.Router();
router.get("/list", listArticles);
router.post("/create", createArticle);
router.delete("/delete/:id", deleteArticle);
export default router;
