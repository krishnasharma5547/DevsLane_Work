import { Transition } from "@headlessui/react";
import React from "react";
import { Fragment } from "react";
import { useState } from "react";

interface prop {
  title:string
    children:React.ReactElement[]
}

const TagList: React.FC<prop> = ({children,title}) => {
  let [curIndex, setCurIndex] = useState<number>(0);
  const tabIndex = 100 / children.length;
  return (
    <>
      <div className=" font-sans bg-primary-100 pt-16  ">
        <div className=" relative max-w-md mx-auto ">
          <h2 className="text-3xl font-medium text-center mb-4">{title}</h2>
          <div className="flex justify-center  cursor-pointer">
            {children.map((child, index) => (
              <>
                <div
                  className="flex-1  text-2xl font-semibold py-4 px-1 "
                  onClick={() => setCurIndex(index)}
                >
                  {child.props.tagTitle}
                  <span className="text-xs text-star">★</span>
                </div>
              </>
            ))}

            <div
              className={"h-1 bg-primary-400 absolute bottom-0"}
              style={{
                width: tabIndex + "%",
                left: tabIndex * curIndex - 3 + "%",
              }}
            ></div> 
          </div>
        </div>

            {children.map((child ,index) =>
            {
              return <Transition  
              show={index === curIndex}
              enter="trasition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="trasition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0" 
              >

        {children.map((child, index) => (
          <>{curIndex === index ? child.props.children : null}</>
        ))}

       </Transition>})}
      </div>

      {/* {children.map((child, index) => {
        <Transition
          show={curIndex === index}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-full h-24">{index}</div>
        </Transition>; */}
      {/* })} */}
    </>
  );
};


export default React.memo(TagList);
