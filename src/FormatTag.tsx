import React from 'react';
import { Children } from 'react';

export interface props{
    fTitle:string
    desc:string
    img:any
}

const FormatTag: React.FC<props> = (props)=> {
    return (
      <>
        {/* <div className="absolute right-0 left-0 bg-primary-200  py-12  px-12 text-center mx-auto ">
          <div className="flex flex-col sm:flex-row justify-center items-center px-24">
            <div className="flex-1 w-sm">
              <img
                className="md:max-h-80 h-60 max-w-sm"
                src={props.img}
                alt="Not Found"
              />
            </div>
            <div className="flex flex-col space-y-6 px-4 sm:px-0 py-8 sm:py-12">
              <h1 className="text-3xl my-auto font-semibold text-center sm:text-justify ">
                {props.fTitle}
              </h1>
              <p className="text-lg text-center sm:text-justify ">
                {props.desc}
              </p>
            </div>
          </div>
        </div> */}

         <div className="absolute right-0 left-0 bg-primary-200  py-12  sm:px-12 text-center mx-auto ">
          <div className="flex flex-col sm:flex-row justify-center items-center md:px-32">
            <div className="flex-1 w-sm">
              <img
                className="md:max-h-80 h-60 max-w-sm"
                src={props.img}
                alt="Not Found"
              />
            </div>
          <div className="flex flex-col space-y-6  sm:px-0 py-8 sm:py-12 max-w-md">
            <h1 className="text-3xl my-auto font-semibold text-center sm:text-justify ">
              {props.fTitle}
            </h1>
            <p className="text-lg text-center sm:text-justify ">
              {props.desc}
            </p>
          </div>
        </div>
        </div>
      </>
    );
};

export default React.memo(FormatTag);
