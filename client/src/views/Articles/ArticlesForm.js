import React, { useState, useContext } from "react";
//import axios from "../../axios-index";
import { ArticlesContext } from "../../context/ArticlesContext";

export default function ArticlesForm() {
  const { listArticles, addArticle } = useContext(ArticlesContext);
  const [newArticle, setNewArticle] = useState({
    headline: "",
    author: "",
    quote: "",
    linkToArticle: "",
  });
  //const url = "http://localhost:4000/api/articles";

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await addArticle(newArticle);
    console.log("sending request...");
    setNewArticle({
      headline: "",
      author: "",
      quote: "",
      linkToArticle: "",
    });
    await listArticles();
  }
  return (
    <>
      <div className="articles-form-container">
        <div className="form-adding-article">
          <form onSubmit={handleSubmit}>
            <span className="article-span">Add an articel:</span>
            <input
              type="text"
              placeholder="headline"
              onChange={(e) =>
                setNewArticle({ ...newArticle, headline: e.target.value })
              }
              value={newArticle?.headline}
            />
            <input
              type="text"
              placeholder="author"
              onChange={(e) =>
                setNewArticle({ ...newArticle, author: e.target.value })
              }
              value={newArticle?.author}
            />
            <input
              type="text"
              placeholder="quote"
              onChange={(e) =>
                setNewArticle({ ...newArticle, quote: e.target.value })
              }
              value={newArticle?.quote}
            />
            <input
              type="text"
              placeholder="link to article"
              onChange={(e) =>
                setNewArticle({ ...newArticle, linkToArticle: e.target.value })
              }
              value={newArticle?.linkToArticle}
            />
            <button>Add</button>
          </form>
        </div>
      </div>
    </>
  );
}
