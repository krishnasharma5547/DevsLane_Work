import React from 'react';
import TagList from './TagList'
import Tag from './Tag'
import FormatTag from './FormatTag';


const App : React.FC = () =>{
        return (
          <>
            <TagList title="Get Your order Ready">
              <Tag tagTitle={50}>
                <FormatTag fTitle={"Customize your Drink"} desc={"i am a computer science student"} img={""}></FormatTag>
              </Tag>
              <Tag tagTitle={100}>
                <FormatTag fTitle={""} desc={""} img={""}></FormatTag>
              </Tag>
              <Tag tagTitle={150}>
                <FormatTag fTitle={""} desc={""} img={""}></FormatTag>
              </Tag>
              <Tag tagTitle={200}>
                <FormatTag fTitle={""} desc={""} img={""}></FormatTag>
              </Tag>
              <Tag tagTitle={400}>
                <FormatTag fTitle={""} desc={""} img={""}></FormatTag>
              </Tag>
            </TagList>
          </>
        );
}   

export default React.memo(App);