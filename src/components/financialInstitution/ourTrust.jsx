/* eslint-disable react/prop-types */


function ImageWithOverlay() {
  return (
    <div className="bg-blue-100 relative w-full flex flex-col h-full justify-center items-center my-10">
      <div className="relative my-9 flex w-full justify-center items-center flex-col px-10">
        <h1 className="w-1/2 text-center text-4xl text-indigo-900 font-bold leading-[3rem]">
          The BoeFly franchise sales and financing system.
        </h1>
        <p className="w-[60%] py-12 text-center font-semibold text-2xl text-gray-900 ">
          As a BoeFly lender, you’re connected with prequalified small business
          owners seeking financing, expanding your reach like never before.
          <div className="text-indigo-900 font-bold">
            {" "}
            Our all-in-one marketplace helps you:
          </div>
        </p>
        <div className="flex justify-between items-center gap-9 w-full font-ubuntu">
          <Feature
            title="Streamline"
            items="Access key documents from our online portal, so you can focus on evaluating and processing more loans faster."
          />
          <Feature
            title="Access"
            items="Get access to franchise and independent business owners seeking an array of products including: SBA, conventional, MCA and factoring."
          />
          <Feature
            title="Connect"
            items="Easily connect with the right business borrowers that match with your credit box and footprint through unlimited access on our loan marketplace."
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
      <div className="pt-5">
    
          <p className="text-black font-normal text-lg">{items}</p>
    
      </div>
    </div>
  );
}

export default function OurTrust() {
  return (
    <>
      <div className="flex w-full justify-center items-center flex-col">
        <h1 className="w-[65%] text-center text-5xl text-primary font-bold">
          Bottom line: lenders trust BoeFly to grow their business.
        </h1>
        <h2 className="w-[80%] py-6 text-center text-2xl text-gray-500 ">
          As a BoeFly lender, you’re connected with prequalified small business
          owners seeking financing, expanding your reach like never before. Our
          all-in-one marketplace helps you:
        </h2>
      </div>
      <ImageWithOverlay />
    </>
  );
}
