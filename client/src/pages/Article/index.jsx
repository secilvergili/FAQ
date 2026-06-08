import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    API.get(`/articles/${id}`)
      .then((res) => setArticle(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
};

export default Article;