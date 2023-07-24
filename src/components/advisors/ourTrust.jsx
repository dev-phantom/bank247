/* eslint-disable react/prop-types */

function ImageWithOverlay() {
  return (
    <div className="bg-red-100 relative w-full flex flex-col h-full justify-center items-center my-10">
      <div className="relative my-9 flex w-full justify-center items-center flex-col px-10">
        <h1 className="w-1/2 text-center text-4xl text-indigo-900 font-bold leading-[3rem]">
          We help find the right lender for your clients.
        </h1>
        <p className="w-[60%] py-12 text-center font-semibold text-2xl text-gray-900 ">
          We’re your behind-the-scenes partner, delivering you a
          built-for-purpose client portal to securely accept, organize and
          selectively share documents. No paperwork to deal with, just happy
          clients to refer you forward.
          <div className="text-indigo-900 font-bold">
            {" "}
            Our all-in-one marketplace gives you:
          </div>
        </p>
        <div className="flex justify-between items-center gap-9 w-full font-ubuntu">
          <Feature
            title="Simplicity"
            items="Easy customizable online application captures your clients' information, making you more productive"
          />
          <Feature
            title="Security"
            items="Secure, one-click submission of your loan package to any lender you invite."
          />
          <Feature
            title="Visibility"
            items="Complete visibility into your client’s status so you can set expectations for them."
          />
        </div>
      </div>
    </div>
  );
}

function Feature({ title, items }) {
  return (
    <div className="bg-white w-2/3 p-9 rounded-tl-xl rounded-br-xl">
      <h1 className="text-indigo-800 font-semibold text-3xl ">{title}</h1>
      <div className="pt-5">
        <p className="text-black font-normal text-lg">{items}</p>
      </div>
    </div>
  );
}

export default function OurTrust() {
  return (
    <>
      <div className="flex w-full justify-center items-center flex-col">
        <h1 className="w-[65%] text-center text-5xl text-primary font-bold">
          Do more with less and exceed your clients’ expectations.
        </h1>
        <h2 className="w-[80%] py-6 text-center text-2xl text-gray-500 ">
          Partner with us to efficiently serve your clients with an easy online
          application featuring your branding — while seamlessly connecting with
          lenders from your network. Ready to accelerate success? Let’s go.
        </h2>
      </div>
      <ImageWithOverlay />
    </>
  );
}
