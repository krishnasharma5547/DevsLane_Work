import React from 'react';

export interface props{
    fTitle:string
    desc:string
    img:any
}

const FormatTag: React.FC<props> = (props)=> {
    return (
      <>
        <div className="absolute right-0 left-0 bg-primary-200  py-12  px-12 text-center mx-auto ">
          <div className="flex flex-col sm:flex-row justify-center items-center px-24">
            <div className="flex-1 max-w-sm">
              <img src={props.img} alt="Not Found" />
            </div>
            <div className="flex-1 w-sm max-w-md flex flex-col px-4 py-4 space-y-4">
              <h1 className="text-2xl font-medium sm:text-justify">
                {props.fTitle}
              </h1>
              <p className="text-base font-medium sm:text-justify">
                {props.desc}
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default React.memo(FormatTag);
