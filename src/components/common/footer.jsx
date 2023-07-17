/* eslint-disable react/prop-types */

const ListHeader = ({ children }) => {
  return (
    <h2 className="font-medium text-orange-700 text-2xl mb-2">{children}</h2>
  );
};

const Footer = () => {
  const footerSections = [
    {
      title: "Enquire",
      items: [
        { label: "Home", href: "/" },
        { label: "Personal", href: "/" },
        { label: "Business", href: "/" },
        { label: "Financial Institution", href: "/contact" },
        { label: "Advisors", href: "/contact" },
      ],
    },
    {
      title: "Discover",     
      items: [
        { label: "Help center", href: "#" },
        { label: "Terms Of Services ", href: "#" },
        { label: "Legal", href: "#" },
        { label: "Privacy", href: "#" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "About Bank247", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact Us ", href: "#" },
        { label: "Newsletter", href: "#" },
      ],
    },
  ];

  return (
    <footer className="text-blue-500 px-4 lg:pl-20 w-full bg-white py-10 font-inter">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="">
          <div>
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1689467154/bank247/IMG-20230714-WA0023-removebg-preview_rp25wd.png"
              alt="logo"
              className="w-[8rem]"
            />
          </div>
          <div className="text-[#AF0606] w-[80%] py-4 text-base md:text-[18px] font-normal capitalize leading-normal">
            Bringing banks and customers closer
          </div>
          <div className="">
            <span className="text-[#AF0606] text-opacity-80 text-base md:text-16px font-normal capitalize leading-snug">
              Copyright @2023
            </span>
            <br />
            <span className="text-[#AF0606] text-opacity-80 text-base md:text-16px font-normal lowercase leading-snug">
              All rights reserved
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
          {footerSections.map((section) => (
            <div key={section.title}>
              <div className="">
                <ListHeader>{section.title}</ListHeader>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.label} className="py-3">
                      <a href={item.href} className="capitalize text-xl">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

