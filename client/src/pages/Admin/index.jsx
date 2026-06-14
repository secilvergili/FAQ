import { useEffect, useState } from "react";
import API from "../../services/api.js";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await API.delete(`/articles/${id}`);

      setArticles(articles.filter((article) => article._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    API.get("/articles")
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <button
        onClick={() => navigate("/admin/new")}
        className="bg-green-500 text-white px-4 py-2 rounded-lg mb-6"
      >
        New Article
      </button>

      {articles.map((article) => (
        <div
          key={article._id}
          className="bg-white p-4 rounded-lg shadow mb-3 flex justify-between items-center"
        >
          <h2 className="font-semibold">{article.title}</h2>

          <button
            onClick={() => navigate(`/admin/edit/${article._id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(article._id)}
            className="bg-red-400 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
