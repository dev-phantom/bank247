export default function OurPassion() {
  return (
    <div className="flex w-full px-14 my-20 justify-between items-start">
      <div className="w-1/2 pt-4">
        <h1 className="text-5xl font-bold leading-[3.5rem] text-indigo-900">
          Ready to accelerate your business? Partner today to get access to our
          all-in-one marketplace.
        </h1>
        <button className="my-5 py-2 font-bold uppercase font-openSan rounded-full px-8 bg-buttonColor text-white">
          get financed
        </button>
      </div>
      <div className="w-1/2 justify-end flex items-start">
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1689145037/bank247/windows-241bwQl2uWE-unsplash_wjhhfu.jpg"
          alt=""
          className="w-[80%] shadow-2xl z-[3] rounded-xl"
        />
      </div>
    </div>
  );
}
