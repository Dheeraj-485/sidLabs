import React from "react";
import RObot from "./assets/SidlabsInfo.png";
import RObotMobile from "./assets/SidLabsInfoMobile.png";

const SidLabsInfo = () => {
  return (
    <>
      <div
        className="h-fit  py-12 pt-16 flex justify-center items-center"
        data-aos="fade-up"
      >
        <div className="h-fit  w-full bg-[#0077B4] flex items-center">
          <div className="w-full lg:w-2/3 pt-4 lg:pl-20 flex h-fit flex-col lg:items-start items-center gap-4">
            <header className="bebas text-white font-[400] lg:block flex flex-col items-center ">
              <p className="text-[1.625rem] lg:text-[3.875rem]"> SIDLABS</p>
              <span className="text-[1.25rem] lg:text-[2.5rem]">
                Your Destination for Innovation
              </span>
            </header>
            <div className="lg:hidden ">
              <img src={RObotMobile} alt="" />
            </div>
            <p className="plus_Jakarta text-white text-[0.6875rem] lg:text-[1.25rem] text-center lg:text-left font-[700]  w-[90%] lg:w-[45%] leading-8 tracking-wide">
              SidLabs is not just a company; it's a destination for innovation
            </p>
            <span className=" lg:w-[75%] w-[90%] text-center lg:text-left  text-[0.625rem] plus_Jakarta text-white lg:text-[1.25rem] font-[400] lg:pb-0 pb-4">
              Our suite of products represents three distinct stores in our
              innovation mall. Each store is a world in itself, driven by the
              relentless pursuit of excellence and global human upgradation.
            </span>
          </div>
          <div className="w-1/3 mr-28 mt-6 hidden lg:block">
            <img src={RObot} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidLabsInfo;
