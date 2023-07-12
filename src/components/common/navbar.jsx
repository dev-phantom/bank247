import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  // this is really nice but can you follow the camel casing convention please ?
  //never (smiles)

  let links = [
    { name: "Individual", link: "/" },
    { name: "Businesses", link: "/" },
    { name: "Financial Institution", link: "/contact" },
    { name: "Consultant", link: "/register" },
  ];

  let navigate = useNavigate();

  return (
    <div className="z-[5] w-full bg-transparent px-1 ">
      <div className="items-center justify-between gap-3 shadow-lg rounded py-4 px-7 md:flex md:w-full md:px-4 lg:px-20">
        <div>test</div>
        <div className="pl-20">
          <ul className="z-[9] w-full text-[#AF0606] capitalize pl-5  md:pb-0 transition-all duration-300 ease-in  md:z-auto md:flex justify-center items-center md:w-auto md:items-center md:pl-0 ">
            {links.map((link) => (
              <li
                key={link.name}
                className="text-xl my-7 hover:border-b-4 hover:border-blue-900 font-poppins md:py-2 text-base font-medium md:my-0 md:px-5"
              >
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex gap-2 ">
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
              className="py-2 font-bold font-openSan rounded-full px-8 bg-[#FF5700] text-white"
            >
              Get A Loan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
