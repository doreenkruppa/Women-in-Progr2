import React, { useContext } from "react";
//import axios from "../../axios-index";
import ArticlesForm from "./ArticlesForm";
import ArticlesCard from "./ArticlesCard";
import { ArticlesContext } from "../../context/ArticlesContext";

export default function ArticlesList() {
  const { articles } = useContext(ArticlesContext);
  //const url = "http://localhost:4000/api/articles";

  return (
    <div>
      <h1 id="articles-list-top">
        articles on topics of feminism and intersectionality in Programming:
      </h1>
      <div className="articles-list-container"></div>
      <div className="articles-cards-container">
        {articles &&
          articles.map((article, i) => (
            <ArticlesCard article={article} key={i} />
          ))}
      </div>
      <ArticlesForm />
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#articles-list-top">
          back to the top
        </a>
      </div>
    </div>
  );
}
