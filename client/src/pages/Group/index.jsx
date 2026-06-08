import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

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
    <div className="max-w-7xl mx-auto p-6 flex gap-6">
     
      {/* SOL */}
      <div
        key={group.title}
        onClick={() => navigate(-1)}
        
        className="w-1/3 bg-white p-6 rounded-2xl shadow">
          <HiChevronLeft className="text-red-500 text-2xl" />
        <h2 className="text-3xl font-bold mb-4">{group.title}</h2>
        <p className=" text-gray-500">{group.description}</p>
        
      </div>
      

      {/* SAĞ */}
      <div className="w-2/3 space-y-3">
      {group.articles?.map((article) => (
  <div
    key={article._id}
    onClick={() => navigate(`/article/${article._id}`)}
    className="bg-white p-6 border rounded-xl hover:shadow-md transition cursor-pointer"
  >
    <div className="flex justify-between items-center">

    <h3 className="font-semibold text-lg">{article.title}</h3>
    <HiChevronRight className="text-red-500 text-2xl" />
    </div>
  </div>
))}
      </div>
    </div>
  );
};

export default Group;
