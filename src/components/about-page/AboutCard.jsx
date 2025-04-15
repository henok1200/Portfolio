import React from "react";
const AboutCard = ({ props }) => {
  const { title, icon, subTitle, content } = props;
  return (
    <div className="border-2 box-border border-cyan/60 rounded-xl w-[50vw]  sm:w-[43.6vw] py-[2vh] px-[2.24vw] shadow-card h-[40vh] sm:h-auto min-h-[250px]">
      <div className=" text-center border-b-[0.3vh] rounded-b-lg mb-[1.5vh] border-gray/50 ">
        <h2 className="text-[1.2rem] text-cyan font-light font-agbalumo not-italic">
          <img className="inline-block mr-2 size-[2rem] " src={icon} alt="cap" />
          {title}
        </h2>
        <h3 className="text-[0.95rem] lg:text-[1.25rem] my-[1vh] font-Roboto font-semibold text-pink/80">
          {subTitle}
        </h3>
      </div>
      
      <div className="py-[1vh] px-[1vw] bg-cyan/20 rounded-lg text-gray font-semibold font-inter text-wrap">
        <p className="text-[0.9rem] lg:text-[1.1rem]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;