import SearchInput from "./SearchInput";

const Banner = ({ search, setSearch }) => {
  return (
    <div
      className="relative h-[350px] md:h-[420px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/banner.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  "></div>

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-2xl px-4">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-3">
          
        </h1>

        <p className="text-gray-500 mb-6">
          Merhaba, size nasıl yardımcı olabiliriz?
        </p>

        <SearchInput search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default Banner;