import BannerLogo from "../../assets/banner-stack.png";

const Banner = () => {
  return (
   <div className="container mx-auto px-4 md:px-6">
     <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-6 text-left">
      <div className="w-full lg:flex-1 lg:min-w-0">
        <h2 className="font-extrabold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">Development Stack</span>
        </h2>
        <p className="text-[#475569] text-xl font-medium mb-12 lg:max-w-2xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn rounded-xl border-none text-white bg-[#D91B7E]">
            Explore Technologies
          </button>
          <button className="btn rounded-xl px-10 border-none">Learn More</button>
        </div>
      </div>

       <div className="w-full lg:w-64 xl:w-auto shrink-0 flex justify-center">
        <img src={BannerLogo} alt="" className="w-64 sm:w-80 lg:w-full xl:w-auto max-w-full" />
      </div>
    </div>
   </div>
  );
};

export default Banner;
