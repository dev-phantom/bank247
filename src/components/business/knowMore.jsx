export default function KnowMore() {
  return (
    <div className="flex flex-row-reverse w-full px-14 my-20 justify-between items-start">
      <div className="w-1/2 pt-5">
        <h1 className="text-4xl w-[80%] font-bold leading-[3.5rem] text-indigo-900">
          We get franchisees funded faster.
        </h1>
        <p className="text-xl text-gray-800 py-6 font-normal">
          When your candidate is ready for funding, they fill out a one-step
          application in our safe and secure online platform custom branded for
          you. Franchisees who’ve used our online verification tool, bVerify,
          get a giant head start, making it seamless to connect them with banks.
          <div className="pt-3"></div>
          Our technology makes it easy for you to check in on your candidate’s
          progress throughout the financing process — while giving your
          candidates the information they need to move forward with confidence.
        </p>
      </div>
      <div className="w-1/2 justify-start flex items-start">
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1690206325/bank247/Franchisor-FundFast_sogqyh.jpg"
          alt=""
          className="w-[80%] shadow-2xl z-[3] rounded-l-xl"
        />
      </div>
    </div>
  );
}
