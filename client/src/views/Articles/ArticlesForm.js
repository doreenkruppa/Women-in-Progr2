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
      <div className="articles-form">
        <h3> Add an articel here:</h3>
        <form onSubmit={handleSubmit}>
          <p>Headline:</p>
          <input
            type="text"
            placeholder="headline"
            onChange={(e) =>
              setNewArticle({ ...newArticle, headline: e.target.value })
            }
            value={newArticle?.headline}
          />
          <p>Author:</p>
          <input
            type="text"
            placeholder="author"
            onChange={(e) =>
              setNewArticle({ ...newArticle, author: e.target.value })
            }
            value={newArticle?.author}
          />
          <p>Insert a quote:</p>
          <input
            type="text"
            placeholder="quote"
            onChange={(e) =>
              setNewArticle({ ...newArticle, quote: e.target.value })
            }
            value={newArticle?.quote}
          />

          <p>Insert the link to the articel:</p>
          <input
            type="text"
            placeholder="link to article"
            onChange={(e) =>
              setNewArticle({ ...newArticle, linkToArticle: e.target.value })
            }
            value={newArticle?.linkToArticle}
          />
          <br></br>
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
