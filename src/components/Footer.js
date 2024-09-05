import React from "react";
import { Link } from "react-router-dom";
import fb from "./assets/fLogo.svg";
import insta from "./assets/InstaLogo.svg";
import Linkedin from "./assets/LinkedInLogo.svg";
import twitter from "./assets/twitterLogo.svg";
import whatsapp from "./assets/whatsapp-logo.svg";
import Logo from "./assets/Logo.png";

const Footer = () => {
  return (
    <div
      className=" h-fit lg:pt-20 pt-6 bg-[#F7F9FC] flex justify-center  items-end"
      data-aos="fade-in"
    >
      <div className="w-[90%] h-fit  flex flex-col gap-3 lg:gap-8">
        <div className="flex lg:flex-row flex-col  justify-center gap-4 lg:gap-0 lg:justify-between">
          <div className="lg:w-1/1 flex flex-col lg:items-start items-center gap-4 lg:gap-8">
            <img src={Logo} alt="" />
            <div className="flex w-full flex-col lg:flex-row gap-3 lg:gap-0 lg:items-start items-center justify-between lg:pe-40 pe-0 ">
              <h3 className="plus_Jakarta text-[0.9rem] lg:text-start text-center lg:text-[1rem] text-[#040505] font-[400]">
                Join us on this extraordinary journey as we redefine the limits
                of human potential. Together, we are forging a brighter
                future—one innovation at a time.
              </h3>
            </div>
          </div>
          <div className=" flex-container1 flex w-full  flex-col lg:flex-row gap-3 lg:gap-0 lg:items-start items-center justify-between">
            <p className="lg:w-[30%]  text-center lg:text-left plus_Jakarta font-[400]">
              <h1 className="text-[rgba(4, 5, 5, 0.80)] text-[0.9rem] lg:text-[1rem]">
                Address
              </h1>
              <span className="text-[0.9rem] lg:text-[1rem] text-[#040505]">
                SidLabs, Asaf Ali Road, New Delhi-110002
              </span>
            </p>
            <p className="lg:w-[30%]  text-center lg:text-left plus_Jakarta font-[400]">
              <h1 className="text-[rgba(4, 5, 5, 0.80)] text-[0.9rem] lg:text-[1rem">
                Email
              </h1>
              <span className="text-[0.9rem] lg:text-[1rem text-[#040505]">
                info@sidlabs.net
              </span>
            </p>
            <p className="w-[90%] lg:w-[30%]  text-center lg:text-left plus_Jakarta font-[400]">
              <h1 className="text-[rgba(4, 5, 5, 0.80)] text-[0.9rem] lg:text-[1rem">
                Chat with us!
              </h1>
              <div className=" flex justify-center flex-container2">
                <img src={whatsapp} alt="" />
              </div>
            </p>
          </div>
        </div>
        <div className="border border-[rgba(0, 0, 0, 0.32)] w-[130%] -ml-10 lg:ml-0 lg:w-full"></div>
        <div className="flex lg:flex-row flex-col justify-between pb-6 lg:pb-12 items-center gap-3 lg:gap-0">
          <p className="text-[#040505]  text-[0.5rem] lg:text-[0.875rem] font-[400] leading-[1.25rem]">
            Copyright © 2023 Sidlabs. All rights reserved. Terms of Use &amp;
            Privacy Policy
          </p>
          <div className="flex lg:gap-8 gap-4">
            <p className="rounded-[6.25rem] border border-[rgba(4, 5, 5, 0.32)] py-3 px-3 cursor-pointer">
              <img className="w-[0.5625rem] lg:w-full" src={fb} alt="" />
            </p>
            <Link to="https://www.linkedin.com/dheerajangurala" target="_blank">
              <p className="rounded-[6.25rem] blue-background border border-[rgba(4, 5, 5, 0.32)] py-3 px-3 cursor-pointer">
                <img
                  className="w-[0.5625rem] lg:w-full blue-background"
                  src={Linkedin}
                  alt=""
                />
              </p>
            </Link>
            <p className="rounded-[6.25rem] border border-[rgba(4, 5, 5, 0.32)] py-3 px-3 cursor-pointer">
              <img className="w-[0.5625rem] lg:w-full" src={twitter} alt="" />
            </p>
            <p className="rounded-[6.25rem] border border-[rgba(4, 5, 5, 0.32)] py-3 px-3 cursor-pointer">
              <img className="w-[0.5625rem] lg:w-full" src={insta} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
