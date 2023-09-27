import { useState, createContext, useEffect } from "react";
import axios from "../axios-index";
export const ArticlesContext = createContext();

export default function ArticlesContextProvider({ children }) {
  const [articles, setArticles] = useState([]);
  //const url = "http://localhost:4000/api/groups";

  const listArticles = async () => {
    const res = await axios.get(`/api/articles/list`);
    setArticles(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    listArticles();
  }, []);

  const addArticle = async (data) => {
    try {
      if (articles.some((article) => article.name === data.name))
        return alert("the name already exists");

      await axios.post(`/api/articles/create`, data);
    } catch (err) {
      return err;
    }
  };

  return (
    <ArticlesContext.Provider
      value={{ articles, setArticles, addArticle, listArticles }}
    >
      {children}
    </ArticlesContext.Provider>
  );
}
