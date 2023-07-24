
export default function AboutBank() {
  return (
    <div className="w-full flex flex-row px-20 py-20 my-9 bg-blue-100">
      <div className="w-1/2 justify-start flex items-start">
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1687246914/safeguard-heart/Rectangle_1308_3_wplitb.png"
          alt=""
          className="w-full shadow-2xl "
        />
      </div>

      <div className="flex justify-center flex-col pl-20">
        <h1 className="w-[80%] text-5xl text-primary font-bold">
          We live and breathe small business.
        </h1>
        <p className="text-xl text-gray-900 w-[60%] py-10 font-normal">
          From startups to large multi-unit owners, tens of thousands of small
          business owners have been putting their trust in us since 2010.
        </p>
        <div>
          <button className="py-2 border-2 border-black font-bold uppercase font-openSan rounded-full px-8 bg-buttonColor text-white">
            about Bank247
          </button>
        </div>
      </div>
    </div>
  );
}
