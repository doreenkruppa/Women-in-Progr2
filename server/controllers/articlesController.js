import { StatusCodes } from "http-status-codes";
import Article from "../models/Articles.js";

export const listArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    return res.status(StatusCodes.OK).json(articles);
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.toString() });
  }
};
export const createArticle = async (req, res) => {
  try {
    const createdArticle = await Article.create({
      headline: req.body.headline,
      quote: req.body.quote,
      linkToArticle: req.body.linkToArticle,
    });
    return res.status(StatusCodes.OK).json(createdArticle);
  } catch (err) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.toString() });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const toDelete = await Article.findByIdAndDelete(req.params.id);
    console.log("deleted:", toDelete);
    return res.status(200).json(toDelete);
  } catch (err) {
    console.log("err", err);
  }
};
export default { listArticles, createArticle, deleteArticle };
