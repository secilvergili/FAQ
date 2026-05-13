import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
const Group = () => {
  const { id } = useParams();
  const [group, setGroup] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    API.get(`/groups/${id}`)
      .then((res) => setGroup(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!group) return <div>Loading...</div>;

  return (
    <div className="flex gap-6">
      {/* SOL */}
      <div className="w-1/3 bg-white p-5 rounded-xl shadow">
        <h2 className="text-lg font-bold">{group.title}</h2>
        <p className="text-sm text-gray-500 mt-2">{group.description}</p>
      </div>

      {/* SAĞ */}
      <div className="w-2/3 space-y-3">
      {group.articles?.map((article) => (
  <div
    key={article._id}
    onClick={() => navigate(`/article/${article._id}`)}
    className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
  >
    <h3 className="font-medium">{article.title}</h3>
  </div>
))}
      </div>
    </div>
  );
};

export default Group;
