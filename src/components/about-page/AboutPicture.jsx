import React from "react";
import picture_two from "../../assets/images/picture_two.png";

const AboutPicture = () => {
  return (
    <div className="col-span-5 mx-auto hidden h-full w-full justify-center overflow-clip rounded-2xl   pt-[2vh] md:flex shadow-text">
      <img
        className="transition-effect min-h-full hover:scale-105"
        src={picture_two}
        alt=""
      />
    </div>
  );
};

export default AboutPicture;
