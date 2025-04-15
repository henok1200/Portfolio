import React from "react";

const AboutText = () => {
  return (
    <div className="shadow-text mx-auto max-w-3xl rounded-md bg-black p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl lg:p-8">
      <p className="text-left text-[0.98rem] leading-7  tracking-normal text-gray-300 sm:text-center sm:text-[1.05rem] sm:leading-8 lg:text-[1.2rem]">
        I am a{" "}
        <span className="font-semibold text-white/90">Full Stack Developer</span>{" "}
        and
        <span className="font-semibold text-white/90"> UI/UX Designer</span> who
        blends creativity with technical expertise to build visually appealing
        and user-friendly digital experiences. I focus on detail and craft
        intuitive, innovative designs that enhance how users interact with
        products. With experience across multiple technologies and design tools,
        I turn ideas into functional, high-quality solutions that balance
        aesthetics and performance.
      </p>
    </div>
  );
};

export default AboutText;
