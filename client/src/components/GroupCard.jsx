import { useNavigate } from "react-router-dom";

const GroupCard = ({ group }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/group/${group._id}`)}
      className="cursor-pointer p-4 border rounded-xl mb-3 hover:bg-gray-100 transition"
    >
      <h2 className="font-semibold">{group.title}</h2>
      <p className="text-sm text-gray-500">{group.description}</p>
    </div>
  );
};

export default GroupCard;