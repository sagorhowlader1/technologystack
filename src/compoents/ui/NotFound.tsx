import Navbar from "../devStack/Navbar";
import Footer from "../devStack/Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center min-h-[60vh] py-16">
        <p className="text-6xl sm:text-7xl font-extrabold text-[#D91B7E]">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mt-4">
          Page Not Found
        </h1>
        <p className="text-[#64748B] mt-3 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="btn mt-8 rounded-xl border-none text-white bg-[#D91B7E]"
        >
          Go Home
        </a>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
