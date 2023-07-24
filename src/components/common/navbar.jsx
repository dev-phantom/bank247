import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  let links = [
    { name: "Personal", link: "/personal" },
    { name: "Business", link: "/business" },
    { name: "Financial Institution", link: "/contact" },
    { name: "Advisors", link: "/register" },
  ];

  let navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-[5] w-full bg-transparent px-1">
      <div className="items-center justify-between gap-3 shadow-lg rounded py-4 px-7 flex w-full md:px-4 lg:px-20">
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1689467154/bank247/IMG-20230714-WA0023-removebg-preview_rp25wd.png"
            alt="logo"
            className="w-[8rem]"
          />
        </div>
        <div className="pl-20">
          <button
            onClick={toggleMenu}
            className="block md:hidden text-xl text-[#AF0606]"
          >
            ☰
          </button>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } z-[9] w-full text-[#AF0606] capitalize pl-5 md:pb-0 transition-all duration-300 ease-in md:z-auto md:flex justify-center items-center md:w-auto md:pl-0`}
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="text-xl my-7 hover:border-b-4 hover:border-blue-900 font-poppins md:py-2 text-base font-medium md:my-0 md:px-5"
              >
                <NavLink to={link.link} ClassName="text-blue-900">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2">
          <div>
            <button
              onClick={() => navigate("/login")}
              className="py-2 font-semibold font-openSan px-3 text-black"
            >
              Sign in
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate("/login")}
              className="py-2 font-bold font-openSan rounded-full px-8 bg-buttonColor text-white"
            >
              Get a Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
