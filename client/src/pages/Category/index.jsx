import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";
import {
  HiOutlineBookOpen,
  HiOutlineSpeakerphone,
  HiOutlineVideoCamera,
} from "react-icons/hi";

const iconMap = {
  HiOutlineBookOpen: HiOutlineBookOpen,
  HiOutlineSpeakerphone: HiOutlineSpeakerphone,
  HiOutlineVideoCamera: HiOutlineVideoCamera,
};

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
    <div className="max-w-6xl mx-auto p-6 grid sm:grid-cols-3 gap-6">
      {/* CATEGORY TITLE */}
      <div className="col-span-1">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <div className="text-5xl text-red-500 mb-4">

          </div>

          <h1 className="text-2xl font-bold">
            {category?.title}
          </h1>

          <p className="text-gray-500 mt-2">
          Verimix V2B Yazılımı
          </p>

        </div>
      </div>

      {/* GROUP CARDS */}

      <div className="col-span-2 space-y-6">
      {groups.map((group) => {
        const Icon = iconMap[group.icon];

        return (
          <div
            key={group._id}
            onClick={() => navigate(`/group/${group._id}`)}
            className="bg-white rounded-2xl shadow p-8 mb-4 cursor-pointer hover:shadow-lg transition"
          >
            <div className="text-red-500 text-3xl mb-3">{Icon && <Icon />}</div>
            <h2 className="text-lg font-semibold">{group.title}</h2>

            <p className="text-sm text-gray-500 mt-1">{group.description}</p>

            <div className="text-xs text-gray-400 mt-3">
              {group.articleCount} makale • {group.createdBy}
            </div>

            <div className="text-xs text-gray-400">
              {new Date(group.updatedAt).toLocaleDateString()}
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Category;
