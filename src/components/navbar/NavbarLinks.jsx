import { IoIosClose } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import React, { useState } from "react";

const routes = ["Home", "About", "Skills", "Services", "Portfolio"];
const NavbarLinks = () => {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOPen, setIsMobileMenuOPen] = useState(false);

  return (
    <>
    <div>
      <div>
        <ul className="text-gray  max-w-ful hidden flex-wrap space-x-8 text-[1.5rem] font-semibold lg:flex">
          {routes.map((route, index) => (
            <li
              className={`transition-effect group hover:-translate-y-1 hover:scale-105 ${active === route ? "text-cyan" : ""} hover:text-cyan`}
              key={index}
            >
              <a
                onClick={() => {
                  setActive(route);
                }}
                href="#"
              >
                {route}
              </a>
              <div
                className={`bg-cyan mt-[1px] h-[2.4px] w-0 rounded-full ${active === route ? "w-full" : "0"} transition-effect group-hover:w-full`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden ">
        <button onClick={()=> setIsMobileMenuOPen(true)} className={`focus:outline-none transition-effect hover:text-cyan text-gray ${isMobileMenuOPen ? "disabled:true" :"disabled:false"}`}>
          <HiOutlineMenu className=" size-[6vh]" />
        </button>
        { 
          isMobileMenuOPen &&
          <div className="border-gray/30    shadow-mobileNavbar absolute top-[11vh] left-0 mx-[5vw] w-[80vw] justify-center rounded-xl z-100 border">
          <button onClick={()=> setIsMobileMenuOPen(!isMobileMenuOPen)} className="text-gray/70 absolute top-0 right-0 hover:text-gray transition-effect">
            <IoIosClose className=" size-[7vh]" />
          </button>
          <ul className="text-gray max-w-ful mt-[1vh] flex flex-col space-y-[1.1vh] px-[5vw] py-[3vh] text-[1.2rem] md:text-[1.5rem] font-semibold">
            {routes.map((route, index) => (
              <li
                className={`transition-effect group hover:translate-y-1 ${active === route ? "text-cyan" : ""} hover:text-cyan`}
                key={index}
              >
                <a
                  onClick={() => {
                    setActive(route);
                    setIsMobileMenuOPen(false)
                  }}
                  href="#"
                >
                  {route}
                </a>
                <div
                  className={`bg-cyan mt-[1px] h-[2.4px] w-0 rounded-full ${active === route ? "w-full" : "0"} transition-effect group-hover:w-full`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
        }
      
      </div>

    </div>
         {isMobileMenuOPen && <div  className="min-h-screen w-[100vw] absolute -top-7 bg-black/60 -left-6  z-30"></div>} 
     </>
  );
};

export default NavbarLinks;
