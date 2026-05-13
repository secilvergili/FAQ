import { useNavigate } from "react-router-dom";
import { RiPulseFill } from "react-icons/ri";
import { VscSync } from "react-icons/vsc";
import { FiLink } from "react-icons/fi";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { GrDownload } from "react-icons/gr";

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();

  const iconMap = {
    RiPulseFill,
    VscSync,
    FiLink,
    BsFillBoxSeamFill,
    HiOutlineSupport,
    GrDownload,
  };

  const Icon = iconMap[category.icon?.trim()];

  return (
    <div
      onClick={() => navigate(`/category/${category._id}`)}
      className="
  bg-white
  rounded-2xl
  p-6
  shadow-md
  border border-gray-100
  hover:shadow-xl
  hover:-translate-y-1
  transition-all
  cursor-pointer
  flex
  flex-col
  items-center
  justify-center
  text-center
  h-44
"
    >
      <div className="text-center">
        {Icon && <Icon size={40} className="mx-auto text-red-500" />}

        <h3 className="mt-3 font-semibold text-center">
          {category.title}
        </h3>

        <p className="text-xs text-gray-500">
          {new Date(category.lastUpdated).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;