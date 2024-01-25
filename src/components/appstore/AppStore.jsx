import React from "react";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 ">
        <div className="max-w-[1500px] mx-auto p-5">
          <div className="grid sm:grid-cols-2 grid-cols-1  items-center gap-4">
            <div className="space-y-6 max-w-xl mx-auto">
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                Foodly is available for Android and IOS
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src="/play_store.png"
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="/play_store.png"
                    alt="App store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div>
              <img
                src="/mobile_bike.gif"
                alt="mobile bike"
                className="w-full sm:max-w-[60%]  rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
