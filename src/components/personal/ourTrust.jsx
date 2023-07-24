
export default function OurTrust() {
  return (
    <div className="flex w-full justify-center items-center flex-col">
      <h1 className="w-[65%] text-center text-5xl text-primary font-bold">
        Get exactly what you need from one trusted partner.
      </h1>
      <h2 className="w-[60%] py-6 text-center text-2xl text-gray-500 ">
        We make it easier than ever to connect with the right small business
        lender and get the funding and resources to realize your dreams and move
        your business forward. We got this. Let’s go.
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
  );
}
