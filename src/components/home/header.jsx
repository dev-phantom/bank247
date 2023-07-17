export default function Header() {
  return (
    <header className="bg-[url('https://res.cloudinary.com/phantom1245/image/upload/v1689114590/bank247/martin-martz-rMRT4hF-Fsg-unsplash_y3douq.jpg')] h-[70vh] w-full bg-cover bg-no-repeat flex flex-col gap-5 justify-center items-center text-white">
      <h1 className="text-5xl font-bold">
        Bringing Banks and Customers Closer
      </h1>
      <h2 className="text-2xl  font-semibold">
        Fostering Partnerships . Empowering Business . Growing the Economy
      </h2>
      <div className=" flex justify-center  items-center gap-5 pt-8">
        <div>
          <button className="py-2 font-bold uppercase font-openSan rounded-full px-8 bg-[#FF5700] text-white">
            get financed
          </button>
        </div>
        <div>
          <button className="py-2 font-bold uppercase font-openSan rounded-full px-8 bg-transparent border-2 border-white text-white">
            learn more
          </button>
        </div>
      </div>
    </header>
  );
}
