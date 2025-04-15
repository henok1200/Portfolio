import React from "react";
import Page from "../page-separator/Page";
import AboutText from "./AboutText";
import AboutPicture from "./AboutPicture";
import AboutCard from "./AboutCard";
import HorizontalLine from "../page-separator/HorizontalLine";


const AboutPage = () => {
  return (
    <div className=" ">
      <Page page={"About Me"} />
       <div className="grid-cols-12 justify-center gap-5 md:grid">
        <div className="col-span-7 flex flex-col">
          <AboutText />
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
