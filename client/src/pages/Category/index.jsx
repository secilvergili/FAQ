import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";

const Category = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState(null);
  const [groups, setGroups] = useState([]);

  useEffect(() => {

    API.get(`/categories/${id}`)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));

    API.get(`/groups/category/${id}`)
      .then((res) => setGroups(res.data))
      .catch((err) => console.log(err));

  }, [id]);

  return (
    <div>

      {/* CATEGORY TITLE */}
      <h1 className="text-xl font-bold mb-6">
        {category?.title}
      </h1>

      {/* GROUP CARDS */}
      {groups.map((group) => (
        <div
          key={group._id}
          onClick={() => navigate(`/group/${group._id}`)}
          className="bg-white rounded-2xl shadow p-5 mb-4 cursor-pointer hover:shadow-lg transition"
        >
          <div className="text-2xl mb-2">{group.icon}</div>

          <h2 className="text-lg font-semibold">{group.title}</h2>

          <p className="text-sm text-gray-500 mt-1">
            {group.description}
          </p>

          <div className="text-xs text-gray-400 mt-3">
            {group.articleCount} makale • {group.createdBy}
          </div>

          <div className="text-xs text-gray-400">
            {new Date(group.updatedAt).toLocaleDateString()}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Category;