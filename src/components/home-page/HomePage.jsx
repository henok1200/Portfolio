import React from "react";
import HomeAvatar from "./HomeAvatar";
import HomeText from "./HomeText";
import HorizontalLine from "../page-separator/HorizontalLine";

const HomePage = () => {
  return (<div className="h-screen flex flex-col justify-around">
    <div className="flex flex-col gap-[3vh] items-center justify-around py-[12vh] md:py-[15vh] lg:flex-row ">
        
      <HomeAvatar />
      <HomeText />
    </div>
    <HorizontalLine className=""/>
    </div>
  );
};

export default HomePage;
