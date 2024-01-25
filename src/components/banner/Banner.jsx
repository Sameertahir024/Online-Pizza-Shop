import React from "react";

// import Vector from "../../assets/vector3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  //   const bgImage = {
  //     backgroundImage: `url(${Vector})`,
  //     backgroundPosition: "center",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover",
  //     height: "100%",
  //     width: "100%",
  //   };
  return (
    <>
      <div className="min-h-[550px] max-w-[1500px] mx-auto p-5">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src="/biryani5.png"
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center text-center md:text-start gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">Meal Planner</h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                  Download SavoryBite today and embark on a delightful adventure
                  in the world of flavors, tastes, and creativity.
                  <br />
                  <br />
                  it's your kitchen sidekick, offering inspiration, guidance,
                  and convenience at every step of your cooking journey. With
                  its user-friendly interface, comprehensive features, and a
                  thriving community, it's the go-to app for food lovers,
                </p>
                <div className="flex justify-center md:justify-start gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-amber-500 to-pink-500  py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
