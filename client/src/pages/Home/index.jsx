import { useEffect, useState } from "react";
import API from "../../services/api";
import CategoryCard from "../../components/CategoryCard";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const allArticles = categories.flatMap((cat) =>
    (cat.subCategories || []).flatMap((sub) =>
      (sub.articles || []).map((article) => ({
        ...article,
        categoryTitle: cat.title,
        subCategoryTitle: sub.title,
      }))
    )
  );

  const query = search.toLowerCase();

  const filteredArticles = allArticles.filter((article) => {
    const title = article.title || "";

    const content =
      typeof article.content === "string"
        ? article.content
        : JSON.stringify(article.content || "");

    return (
      title.toLowerCase().includes(query) ||
      content.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <Header search={search} setSearch={setSearch} />

      <div className="p-6">
        {search ? (
          <div className="space-y-4">
            {filteredArticles.length === 0 && (
              <p className="text-gray-500">Sonuç bulunamadı</p>
            )}

            {filteredArticles.map((article) => (
              <div
                key={article._id}
                className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                <h3 className="font-semibold">{article.title}</h3>
                <p className="text-sm text-gray-500">
                  {article.categoryTitle} / {article.subCategoryTitle}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 py-10">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                  <CategoryCard key={cat._id} category={cat} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
