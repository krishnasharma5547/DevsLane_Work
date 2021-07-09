import React from "react";
import { useState } from "react";
import FormatTag from "./FormatTag";
interface props {
  title:string
    children:React.ReactElement[]
}

const TagList: React.FC<props> = ({children,title}) => {
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
          {/* <div>
          {{children.forEach(child: any=> {
              <>
              {child}
              </>
          });}
              </div> */}
        </div>
        {/* <FormatTag
          title={children.props.fTitle}
          desc={children.desc}
          img="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"
        ></FormatTag>  */}

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


export default React.memo(TagList);
