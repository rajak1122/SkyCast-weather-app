import sun from "../assets/sun.png";

function Footer() {
  return (
    <>
      <div className="p-6 bg-[#b2e0ff] mt-[10%]">
        <div className="flex items-center gap-2">
          <img src={sun} alt="logo" className="w-10" />
          <h1 className="text-3xl font-medium text-[#2563EB]">
            Sky Cast
          </h1>
        </div>
        <div className="mt-2 text-sm flex flex-col gap-3 md:gap-5">
          <p className="text-[#6B7280]">Rain or Shine, We've got you</p>
          <p className="text-[#6B7280]">Made with by Raja❤️ using React & Weather API</p>
          <p className="text-[#6B7280]">© 2026 Sky Cast. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
