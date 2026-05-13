const SearchInput = ({ search, setSearch }) => {
 return (
   <input
     type="text"
     placeholder="Ara"
     value={search}
     onChange={(e) => setSearch(e.target.value)}
     className="
  w-full
  p-4
  rounded-xl
  bg-white
  border
  border-gray-200
  shadow-md
  outline-none
  focus:ring-2
  focus:ring-red-400
"
   />
 );
};

export default SearchInput;