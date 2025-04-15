import React from "react";
import Page from "../page-separator/Page";
import AboutText from "./AboutText";
import AboutPicture from "./AboutPicture";
import AboutCard from "./AboutCard";
import cap from "../../assets/icons/cap.svg";
import star from "../../assets/icons/star.svg";
import HorizontalLine from "../page-separator/HorizontalLine";

const cards = [
  {
    title: "Education",
    icon: cap,
    subTitle: "Addis Ababa University",
    content:
      "Bachelor of science in Computer Science \nExpected Graduation: June 2026",
  },
  {
    title: "Experience",
    icon: star,
    subTitle: "2+ years",
    content: "Full Stack dev and ui/ux design",
  },
];


const AboutPage = () => {
  return (
    <div className=" ">
      <Page page={"About Me"} />
       <div className="grid-cols-12 justify-center gap-5 md:grid">
        <div className="col-span-7 flex flex-col">
          <AboutText />
           <div className="mt-[2vh] flex w-full  gap-[2.5vw] scrollable overflow-x-scroll  md:flex-nowrap">
            {cards.map((card, index) => {
              return <AboutCard props={card} key={index} className="" />;
            })}
          </div>
        </div>
        <AboutPicture className="" />
      </div>

      <div className="mt-[13.5vh]">
        <HorizontalLine className="mt" />
      </div>
    </div>
  );
};

export default AboutPage;
