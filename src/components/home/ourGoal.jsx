import data from "../../data/data.json"

export default function OurGoal() {
  return (
    <div className="py-12">
      <h1 className="text-[#AF0606] text-center font-bold py-3 text-4xl capitalize ">
        Unlocking your potential: Empowering you to achieve your goals.
      </h1>
      <div className="w-full lg:px-20 px-10 flex lg:flex-row xl:flex-row flex-col justify-center items-center gap-8 py-10">
        {data.goals.map((goal) => {
          return (
            <div
              key={goal.imageUrl}
              className="lg:w-2/3 w-full bg-white flex flex-col justify-center items-center shadow-2xl rounded"
            >
              <div className="">
                <img src={goal.imageUrl} alt="" />
              </div>
              <div>
                <h2 className="py-3 text-blue-800 font-ubuntu text-xl font-semibold">{goal.title}</h2>
              </div>
              <div>
                <h3>{goal.subTitle}</h3>
              </div>
              <div>
                <p>{goal.paragraph}</p>
              </div>
              <div>
                <button className="py-3 font-bold uppercase font-openSan rounded-full px-6 bg-blue-800 border-2 border-white text-white">
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
