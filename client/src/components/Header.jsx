import Banner from "./Banner";

const Header = ({ search, setSearch }) => {
  return (
    <div>
      {/* Logo */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-20">
        <img src="" alt="logo" className="h-10" />
      </div>

      {/* Banner */}
      <Banner search={search} setSearch={setSearch} />
    </div>
  );
};

export default Header;