import DefaultLayout from "../components/layout/defaultLayout";

export default function Personal() {
  return (
    <DefaultLayout>
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
              Personal
            </h1>
            <h2 className="text-5xl pt-4 leading-[3.5rem] font-bold w-[80%]">
              Power the <span className="text-buttonColor">possible.</span>{" "}
              <br /> Fund the business of your{" "}
              <span className="text-buttonColor">dreams.</span>
            </h2>
            <div className=" flex  items-center gap-5 pt-8">
              <div>
                <button className="py-2 border-2 border-white font-bold uppercase font-openSan rounded-full px-8 bg-buttonColor text-white">
                  get financed
                </button>
              </div>
              <div>
                <button className="py-2 font-bold uppercase font-openSan rounded-full px-8 bg-transparent border-2 border-white text-white">
                  learn more
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 pt-32 flex justify-center items-center ">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1689874003/bank247/nik-z1d-LP8sjuI-unsplash_lkhfsh.jpg"
              className="w-[70%] h-[70vh] shadow-2xl rounded-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
      <main>
        <div className="flex w-full justify-center items-center flex-col">
          <h1 className="w-[65%] text-center text-5xl text-primary font-bold">
            Get exactly what you need from one trusted partner.
          </h1>
          <h2 className="w-[60%] py-6 text-center text-2xl text-gray-500 ">
            We make it easier than ever to connect with the right small business
            lender and get the funding and resources to realize your dreams and
            move your business forward. We got this. Let’s go.
          </h2>
          <div className=" relative w-full flex h-full justify-center items-center my-10">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1689145056/bank247/chase-chappell-m29D0DvAhF0-unsplash_q2xnqe.jpg"
              alt=""
              className="w-1/2 shadow-2xl z-[3] rounded-xl"
            />
            <div className="h-[70%] absolute -bottom-9 z[-3] bg-indigo-800 w-full"></div>
          </div>
        </div>

        <div className="flex w-full px-14 my-20 justify-between items-start">
          <div className="w-1/2 pt-10">
            <h1 className="text-4xl font-semibold leading-[3rem] text-indigo-800">
              We’re passionate about helping your small business grow.
            </h1>
            <p className="text-2xl py-6 font-normal">
              Our easy one-step online application simplifies the lending
              process — so you only have to enter your information once. And,
              we’re here to help you provide the exact information the banks
              need to move forward in the lending process for SBA funding or
              conventional loans.
            </p>
          </div>
          <div className="w-1/2 justify-end flex items-start">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1690147736/bank247/andrew-power-y9L5-wmifaY-unsplash_t9toit.jpg"
              alt=""
              className="w-[65%] shadow-2xl z-[3] rounded-e-xl"
            />
          </div>
        </div>

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
              From startups to large multi-unit owners, tens of thousands of
              small business owners have been putting their trust in us since
              2010.
            </p>
            <div>
              <button className="py-2 border-2 border-black font-bold uppercase font-openSan rounded-full px-8 bg-buttonColor text-white">
                about Bank247
              </button>
            </div>
          </div>
        </div>
      </main>
    </DefaultLayout>
  );
}
