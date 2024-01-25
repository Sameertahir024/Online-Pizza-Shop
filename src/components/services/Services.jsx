import React from "react";

const ServicesData = [
  {
    id: 1,
    img: "/biryani2.png",
    name: "Biryani",
    description:
      " Explore nearby restaurants, cafes, and eateries with user reviews and ratings. Find hidden gems and popular spots to satisfy your cravings outside the kitchen.",
  },
  {
    id: 2,
    img: "/biryani2.png",
    name: "Chiken kari",
    description:
      " Explore nearby restaurants, cafes, and eateries with user reviews and ratings. Find hidden gems and popular spots to satisfy your cravings outside the kitchen.",
  },
  {
    id: 3,
    img: "/biryani2.png",
    name: "Cold Cofee",
    description:
      " Explore nearby restaurants, cafes, and eateries with user reviews and ratings. Find hidden gems and popular spots to satisfy your cravings outside the kitchen.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className=" max-w-[1500px] mx-auto p-5">
        <div className="">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Explore nearby restaurants, cafes, and eateries with user reviews
              and ratings. Find hidden gems and popular spots to satisfy your
              cravings outside the kitchen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                <div className="h-[100px] ">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-45 duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
