import React from "react";

const HomeText = () => {
  return (
    <div className="text-gray flex flex-col items-center text-center gap-[3vh]">
      <div>
        <h2 className="text-[1.5rem]  font-semibold tracking-wide md:text-[1.8rem] xsm:text-[1.2rem]">
          Hi, I am <span className=" font-agbalumo text-pink/80 ">Henok Getahun</span> <br />
        </h2>
        <h1 className="text-[2.2rem] xsm:text-[1.6rem] md:text-[2.5rem] font-bold font-Roboto  text-cyan my-[0.5rem]">Full Stack developer</h1>
        <p className="text-[1.1rem] md:text-[1.3rem] xsm:text-[0.9rem] tracking-wide font-semibold">
          I build responsive, user-friendly websites with modern,<span className="inline sm:block"> engaging
          designs.</span> 
        </p>
      </div>
      <div className="flex gap-[1rem]">
        <button className="btn-download btn">Download CV</button>
        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
};

export default HomeText;
