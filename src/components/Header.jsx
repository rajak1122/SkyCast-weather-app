import sun from "../assets/sun.png";

function Header() {
  return (
    <>
      <div className="p-3 bg-gradient-to-r from-blue-700 to-sky-500  shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <img src={sun} alt="logo" className="w-10 md:w-16" />
          <h1 className="text-3xl font-medium text-white md:text-5xl">Sky Cast</h1>
        </div>
        <div className="mt-2 text-sm md:text-xl">
            <p className="text-blue-100">Rain or Shine, We've got you</p>
        </div>
      </div>
    </>
  );
}

export default Header;
