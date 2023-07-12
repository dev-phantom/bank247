import data from "../../data/data.json"

export default function OurGoal() {
  return (
    <div className="py-12">
      <h1 className="text-[#AF0606] text-center font-bold py-3 text-4xl capitalize ">
        Unlocking your potential: Empowering you to achieve your goals.
      </h1>
      <div className="w-full  px-10 flex lg:flex-row xl:flex-row flex-col justify-center items-center gap-8 py-10">
        {data.goals.map((goal) => {
          return (
            <div
              key={goal.title}
              className="lg:w-2/3 h-max w-full bg-white flex flex-col justify-center items-center shadow-2xl rounded"
            >
              <div>
                <img src={goal.imageUrl} alt="" className="w-full h-[30vh] object-cover" />
              </div>
              <div>
                <h2 className="py-3 text-blue-800 font-ubuntu text-3xl font-semibold">
                  {goal.title}
                </h2>
              </div>
              <div>
                <h3 className="text-gray-700 font-ubuntu text-xl font-semibold">
                  {goal.subTitle}
                </h3>
              </div>
              <div>
                <p className="text-gray-500 font-ubuntu text-lg py-2 px-2 font-normal text-center">
                  {goal.paragraph}
                </p>
              </div>
              <div className="pb-3">
                <button className="py-2 font-bold uppercase font-openSan rounded-full px-8 bg-blue-800 border-2 border-white text-white">
                  Read More
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
