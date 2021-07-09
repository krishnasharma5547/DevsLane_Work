import React from "react";
import TagList from "./TagList";
import Tag from "./Tag";
import FormatTag from './FormatTag'
import img1 from "./images/025.png";
import img2 from "./images/050.png";
import img3 from './images/150.png'
import img4 from './images/200.png'
import img5 from "./images/400.png";




const App: React.FC = () => {
  return (
    <>
      <TagList title="Get Your order Ready">
        <Tag tagTitle={25}>
          {
            <FormatTag
              fTitle={"Customize your drink"}
              desc={
                "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
              }
              img={img1}
            ></FormatTag>
          }
        </Tag>
        <Tag tagTitle={50}>
          <FormatTag
            fTitle={"Brewed hot coffee, bakery item or hot tea"}
            desc={
              "Pair coffee cake or an almond croissant with your fresh cup of hot brew."
            }
            img={img2}
          ></FormatTag>
        </Tag>
        <Tag tagTitle={150}>
          <FormatTag
            fTitle={"Handcrafted drink, hot breakfast or parfait"}
            desc={
              "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
            }
            img={img3}
          ></FormatTag>
        </Tag>
        <Tag tagTitle={200}>
          <FormatTag
            fTitle={"Salad, sandwich or protein box"}
            desc={
              "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box."
            }
            img={img4}
          ></FormatTag>
          </Tag>
          <Tag tagTitle={400}>
          <FormatTag fTitle={"Select merchandise or at-home coffee"}
          desc={"Take home a signature cup, a bag of coffee or your choice of select coffee accessories."}
          img={img5}
          ></FormatTag>
        </Tag>
      </TagList>
    </>
  );
};

export default React.memo(App);
