import React from "react";
export interface prop {
  tagTitle: number;
  children: JSX.Element[] | JSX.Element;
}

const Tag: React.FC<prop> = (prop) => {
        return <>{prop}</>
 }

export default React.memo(Tag);