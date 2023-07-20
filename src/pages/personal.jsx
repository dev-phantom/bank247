import DefaultLayout from "../components/layout/defaultLayout";

export default function Personal() {
  return (
    <DefaultLayout>
      <div className="relative text-white h-[70vh] w-full bg-contain bg-no-repeat">
        <div>
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1689856826/bank247/20230720_133826_fmt3ce.png"
            className=" w-full h-[70vh] absolute top-0 right-0"
            alt=""
          />
        </div>
        <div className="relative pt-24 w-1/2 pl-10">
          <h1 className="text-3xl text-white font-semibold">Personal</h1>
          <h2>Power the possible. Fund the business of your dreams.</h2>
        </div>
      </div>
    </DefaultLayout>
  );
}
