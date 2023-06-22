import React, { useEffect, useState } from "react";
import axios from "../../axios-index";
import ArticlesForm from "./ArticlesForm";
import ArticlesCard from "./ArticlesCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  //const url = "http://localhost:4000/api/articles";

  const listArticles = async () => {
    const res = await axios.get(`/api/articles/list`);
    setArticles(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listArticles();
  }, []);

  return (
    <div>
      <h1 id="articles-list-top">
        articles on topics of feminism and intersectionality in Programming:
      </h1>
      <div className="articles-list-container"></div>
      <div className="articles-cards-container">
        {articles &&
          articles.map((article, i) => (
            <ArticlesCard
              articles={articles}
              article={article}
              key={i}
              listArticles={listArticles}
              setArticles={setArticles}
            />
          ))}
      </div>
      <ArticlesForm listArticles={listArticles} />
      <div className="ankerlinks-container">
        <a className="ankerlinks" href="#articles-list-top">
          back to the top
        </a>
      </div>
    </div>
  );
}
