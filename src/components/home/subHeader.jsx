export default function SubHeader() {
  return (
    <div className="bg-[#073B6A]  w-full pt-14 flex text-white flex-col justify-center  items-center ">
      <h1 className="text-4xl  font-bold">
        Power your business forward with Bank247.
      </h1>
      <p className="text-center text-xl font-normal pt-8 pb-14 w-[60%]">
        leverage our technology to connect with Financial Institution to get
        funding you need
        <br />
        <a href="/login">
          <b>Your next step begins right here.</b>
        </a>
      </p>
      <div className="w-full gap-3 bg-[#FF5700] py-4 text-center flex justify-center items-center  ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
        <h3 className="border-b-2 border-white  ">
          Bank247 your one source for connecting with banks, financial institution and expert advisors 
        </h3>
      </div>
    </div>
  );
}
