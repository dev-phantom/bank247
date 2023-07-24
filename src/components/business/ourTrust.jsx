/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Heading({ text }) {
  return (
    <h1 className="w-[65%] text-center text-5xl text-primary font-bold leading-[3.5rem]">
      {text}
    </h1>
  );
}

function Paragraph({ text }) {
  return (
    <p className="w-[60%] py-6 text-center text-2xl text-gray-500 ">{text}</p>
  );
}

function ImageWithOverlay() {
  return (
    <div className=" relative w-full flex flex-col h-full justify-center items-center my-10">
      <img
        src="https://res.cloudinary.com/phantom1245/image/upload/v1690147736/bank247/mimi-thian--VHQ0cw2euA-unsplash_kihj7r.jpg"
        alt=""
        className="w-1/2 shadow-2xl z-[3] rounded-xl"
      />
      <div className="h-[80%] absolute -bottom-9 z[-3] bg-indigo-800 w-full"></div>
      <div className="relative my-9 flex w-full justify-center items-center flex-col px-10">
        <h1 className="w-1/2 text-center text-4xl text-bgColor font-bold leading-[3rem]">
          The BoeFly franchise sales and financing system.
        </h1>
        <p className="w-[60%] py-6 text-center text-2xl text-gray-200 ">
          We go from identifying if a lead is qualified to funding the
          franchisee — with complete visibility for you and your franchisees.
        </p>
        <div className="flex justify-between items-center gap-9 w-full font-ubuntu">
          <Feature
            title="Financing education converts more leads"
            items={[
              "Gives candidates confidence",
              "Drives better lead management",
              "Gives you a soft credit pull",
            ]}
          />
          <Feature
            title="Asset verifications, background checks"
            items={[
              "Gives you confidence in candidate",
              "Cuts lead-to-close time in half",
              "Integrates into your CRM",
            ]}
          />
          <Feature
            title="Full-service financing support"
            items={[
              "Faster, more efficient financing",
              "SBA and conventional funding",
              "Unmatched visibility",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function Feature({ title, items }) {
  return (
    <div className="bg-white w-2/3 p-9 rounded-tl-xl rounded-br-xl">
      <h1 className="text-indigo-800 font-semibold text-3xl ">{title}</h1>
      <ul className="list-disc list-inside pt-5">
        {items.map((item, index) => (
          <li key={index} className="text-indigo-900 text-lg">
            <span className="text-[#222] font-normal">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OurTrust() {
  return (
    <div className="flex w-full justify-center items-center flex-col mt-12">
      <Heading text="Fast track with one single source from start to finish." />
      <Paragraph text="Our online, proprietary franchise sales and financing system makes it easier than ever to accelerate your sales process and close more franchise deals in half the time. Let’s exceed your goals and drive conversions faster. Ready? We are." />
      <ImageWithOverlay />
      
    </div>
  );
}

export default OurTrust;
