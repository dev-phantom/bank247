
export default function OurPassion() {
  return (
    <div className="flex w-full px-14 my-20 justify-between items-start">
      <div className="w-1/2 pt-10">
        <h1 className="text-4xl font-semibold leading-[3rem] text-indigo-800">
          We’re passionate about helping your small business grow.
        </h1>
        <p className="text-2xl py-6 font-normal">
          Our easy one-step online application simplifies the lending process —
          so you only have to enter your information once. And, we’re here to
          help you provide the exact information the banks need to move forward
          in the lending process for SBA funding or conventional loans.
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
  );
}
