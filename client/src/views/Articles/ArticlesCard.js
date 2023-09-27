//import axios from "../../axios-index";

export default function ArticlesCard({ article }) {
  /**const deleteArticle = async () => {
    console.log("deleting");
    //const url = "http://localhost:4000/api/articles";
    const res = await axios.delete(`/api/articles/delete/${article._id}`);
    await listArticles();
  };*/
  return (
    <div className="articles-card">
      <h2>{article.headline}</h2>
      <h3>{article.author}</h3>
      <p>"{article.quote}"</p>
      <div>
        <a href={article.linkToArticle}>read full article</a>
      </div>
      {/**<button onClick={deleteArticle}>Delete</button>
       */}
    </div>
  );
}
