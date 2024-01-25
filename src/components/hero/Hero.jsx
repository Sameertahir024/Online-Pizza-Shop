import React from "react";

const ImageList = [
  {
    id: 1,
    img: "/biryani2.png",
  },
  {
    id: 2,
    img: "/biryani3.png",
  },
  {
    id: 3,
    img: "/biryani5.png",
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState("/biryani2.png");

  return (
    <>
      <div
        className="bg-cover bg-center "
        style={{ backgroundImage: "url(/wave.png)" }}
      >
        <div className="max-w-[1500px] mx-auto p-5  grid grid-flow-row-dense md:grid-cols-2 justify-items-center place-content-start md:place-content-center gap-10 py-16 md:p-10">
          <div className="order-2 md:order-1 space-y-10 text-center md:text-start">
            <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold">
              {" "}
              Welcome to the <span className="text-amber-900">Food</span> Zone
            </h1>
            <p className="hidden lg:flex text-xl">
              Download SavoryBite today and embark on a delightful adventure in
              the world of flavors, tastes, and creativity.
            </p>
            <div>
              <button className="hidden lg:flex bg-gradient-to-r from-amber-600 to-pink-500  py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                Order Now
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/biryani.png"
              className="spin w-[300px] lg:min-w-[450px] 2xl:w-[650px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
