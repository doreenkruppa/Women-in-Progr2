import { Schema, model } from "mongoose";

const articleSchema = new Schema({
  headline: { type: String, required: true },
  author: { type: String, required: true },
  quote: { type: String, required: true },
  linkToArticle: { type: String, required: true },
});

const Article = model("article", articleSchema);
export default Article;
