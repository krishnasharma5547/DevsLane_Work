import React from "react";
import Format from "./FormatTag";

export interface props {
  tagTitle: number;
  children: React.ReactNode;
}

const Tag: React.FC<props> = (props) => {
        return <>{props}</>
 }

export default React.memo(Tag);