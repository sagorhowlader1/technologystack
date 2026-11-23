import FooterLogo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="mt-35">

      <div className="h-px bg-[#F1F5F9]"></div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 lg:gap-0 container mx-auto px-4 md:px-6 mt-15 mb-15"
      >
        <div>
          <div>
            <a href="#">
              <img src={FooterLogo} alt="FooterLogo" />
            </a>
            <p className="text-[#64748B] my-5">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
          </div>

          <div>
            <ul className="flex gap-4 font-semibold text-[#475569] mt-6 my-5">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:mx-10">
          <h2 className="text-[#0F172A] font-bold pb-2">PRODUCT</h2>
          <ul className="text-[#64748B] text-xl">
            <li className="text-[#64748B] py-1">
              <a href="#">Home</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Technologies</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Projects</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0F172A] font-bold pb-2">COMPANY</h2>
          <ul className="text-[#64748B] text-xl">
            <li className="text-[#64748B] py-1">
              <a href="#">About</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Contact</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#0F172A] font-bold pb-2">LEGAL</h2>
          <ul className="text-[#64748B] text-xl">
            <li className="text-[#64748B] py-1">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="text-[#64748B] py-1">
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-px bg-[#F1F5F9]"></div>


      <div className="container mx-auto px-4 sm:px-6 mt-10 sm:mt-12 md:mt-15 mb-10 sm:mb-12 md:mb-15">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-[#64748B] text-sm sm:text-base text-center sm:text-left">

          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-5 sm:gap-6">
            <p className="cursor-pointer hover:text-white transition-colors">
              Privacy
            </p>
            <p className="cursor-pointer hover:text-white transition-colors">
              Terms
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;