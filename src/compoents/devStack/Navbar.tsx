import { useState } from "react";
import Logo from "../../assets/logo-text.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { label: "Home", className: "text-[#DB2777] font-semibold" },
  { label: "Technologies", className: "font-medium text-[#475569]" },
  { label: "Projects", className: "font-medium text-[#475569]" },
  { label: "About", className: "" },
  { label: "Contact", className: "font-medium text-[#475569]" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex justify-between items-center gap-4 py-4">
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          <ul className="hidden lg:flex justify-center items-center gap-3">
            {navLinks.map((link) => (
              <li key={link.label} className={link.className}>
                <a href="#">{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center">
            <button className="btn mr-2 rounded-3xl border-none">
              Sign In
            </button>
            <button className="btn rounded-3xl border-none text-white bg-[#D91B7E]">
              Sign Up
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 cursor-pointer"
          >
            {isOpen ? (
              <AiOutlineClose className="text-2xl text-[#475569]" />
            ) : (
              <AiOutlineMenu className="text-2xl text-[#475569]" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-[#F1F5F9] py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label} className={link.className}>
                  <a href="#" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mt-5">
              <button className="btn flex-1 rounded-3xl border-none">
                Sign In
              </button>
              <button className="btn flex-1 rounded-3xl border-none text-white bg-[#D91B7E]">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="h-px bg-[#F1F5F9]"></div>
    </div>
  );
};

export default Navbar;
