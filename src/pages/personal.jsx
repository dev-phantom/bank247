import DefaultLayout from "../components/layout/defaultLayout";

export default function Personal() {
  return (
    <DefaultLayout>
      <div className="relative text-white h-screen w-full bg-contain bg-no-repeat">
        <div>
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1689856826/bank247/20230720_133826_fmt3ce.png"
            className=" w-full h-[80vh] absolute top-0 right-0"
            alt=""
          />
        </div>
        <div className="relative">
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
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
