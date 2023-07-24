
const partnerLogos = [
  "https://res.cloudinary.com/phantom1245/image/upload/v1684220964/FMTL/image_1_t5zjzi.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1684220965/FMTL/image_2_gdxfhi.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1684220965/FMTL/image_3_i161xu.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1684220965/FMTL/image_5_hzkjrw.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1684220965/FMTL/image_4_ezxivc.png",
  "https://res.cloudinary.com/phantom1245/image/upload/v1684220965/FMTL/image_6_ney4mi.png",
];

const Partners = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center my-8">
      <div className="text-center text-indigo-800 text-3xl font-bold">
        We are trusted by <b>verified</b> businesses
      </div>
      <div className="flex flex-wrap justify-center items-center py-12 gap-10">
        {partnerLogos.map((logo, index) => (
          <div key={index} className="w-32">
            <img className="w-full" src={logo} alt={`Partner Logo ${index}`} />
          </div>
        ))}
      </div>
      <div className="w-1/2 border-indigo-100  border"></div>
    </div>
  );
};

export default Partners;
