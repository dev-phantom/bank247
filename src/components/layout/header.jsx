/* eslint-disable react/prop-types */

export default function Header({
  pageName,
  firstText,
  firstTextSpan,
  secondText,
  secondTextSpan,
  firstBtnText,
  secondBtnText,
  secondBtnTextClass,
  imgUrl,
}) {
  return (
    <div className="relative text-white h-screen w-full">
      <div>
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1689856826/bank247/20230720_133826_fmt3ce.png"
          className=" w-full h-[80vh] absolute top-0 right-0"
          alt=""
        />
      </div>
      <div className="relative flex justify-between ">
        <div className=" pt-14 w-1/2 pl-14">
          <h1 className="text-3xl text-buttonColor font-semibold">
            {pageName || "Personal"}
          </h1>
          <h2 className="text-5xl pt-4 leading-[3.5rem] font-bold w-[80%]">
            {firstText || "Power the"}{" "}
            <span className="text-buttonColor">
              {firstTextSpan || "possible."}
            </span>{" "}
            <br /> {secondText || "Fund the business of your"}{" "}
            <span className="text-buttonColor">
              {secondTextSpan || "dreams."}
            </span>
          </h2>
          <div className=" flex  items-center gap-5 pt-8">
            <div>
              <button className="py-2 border-2 border-white font-bold uppercase font-openSan rounded-full px-8 bg-buttonColor text-white">
                {firstBtnText || "get financed"}
              </button>
            </div>
            <div>
              <button
                className={`${secondBtnTextClass} py-2 font-bold uppercase font-openSan rounded-full px-8 bg-transparent border-2 border-white text-white`}
              >
                {secondBtnText || "learn more"}
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 pt-32 flex justify-center items-center ">
          <img
            src={
              imgUrl ||
              "https://res.cloudinary.com/phantom1245/image/upload/v1689874003/bank247/nik-z1d-LP8sjuI-unsplash_lkhfsh.jpg"
            }
            className="w-[70%] h-[70vh] shadow-2xl rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
