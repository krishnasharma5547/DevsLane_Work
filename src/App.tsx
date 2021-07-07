import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const list = [50, 100, 150, 200, 400];

const App: React.FC = () => {
  let [curIndex, setCurIndex] = useState<number>(0);
  const tabIndex = 100/list.length
  return (
    <>
      <div className=" font-sans bg-primary-100 pt-16 ">
        <div className=" relative max-w-md mx-auto mb-4">
          <h2 className="text-3xl font-medium text-center mb-4">
            Get your favorites for free
          </h2>
          <div className="flex ml-4 justify-center space-x-8 cursor-pointer">
            {list.map((child, index) => (
              <div>
                <div
                  className="flex-1 text-2xl font-semibold py-4 px-1"
                  onClick={() => setCurIndex(index)}
                >
                  {child}
                  <span className="text-xs text-star">★</span>
                </div>
              </div>
            ))}
          </div>

          <div
            className={"h-1 bg-primary-400 absolute"}
            style={{ width: tabIndex + "%", left: tabIndex * curIndex + "%" }}
          ></div>
        </div>
      {/* {list.map((index) =>{
        <Transition
        show={curIndex === index}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
          <div className="w-full h-24">{index}</div>
        </Transition>
      })} */}
      </div>
    </>
  );
};

export default React.memo(App);
