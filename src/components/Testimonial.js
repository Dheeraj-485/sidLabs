import React from "react";
import Quotes from "./assets/Quotes.svg";
import star from "./assets/Star.svg";

const Testimonial = () => {
  return (
    <>
      <div
        className="h-fit lg:py-12 py-6 w-full  flex justify-center items-center"
        data-aos="fade-up"
      >
        <div className="  h-fit w-full py-8 bg-[#EFF9FF] flex flex-col lg:flex-row justify-between items-center lg:gap-0 gap-4">
          <div className="lg:w-1/2 lg:pl-20 flex h-fit flex-col lg:items-start items-center gap-6 lg:gap-12  w-[90%]">
            <header className="flex flex-col lg:gap-0 gap-1  lg:items-start items-center">
              <p className="text-[#0076B4]  text-[1.375rem] lg:text-[1.5rem] font-[600]">
                Testimonial
              </p>
              <span className=" capitalize text-[1.2rem] lg:text-[2.5rem] font-[400] seperate_color">
                See What Our Clients Say’s About Us
              </span>
            </header>
            <p className="text-[#8492A0] hidden lg:block w-[69%]  text-[1.25rem] font-[400] capitalize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
          </div>
          <div className=" [scrollbar-width:none] lg:w-[48rem] px-4 lg:px-0 items-start overflow-x-auto flex  lg:justify-start gap-12 py-4 lg:py-12 ">
            <div className=" [scrollbar-width:none] border flex-shrink-0 w-[70%] lg:w-[24rem] border-[#0076B4] flex flex-col items-center bg-white gap-4 lg:py-6 lg:px-6 py-3 px-3 rounded-[0.4375rem] testimonial_card">
              <img className="self-start" src={Quotes} alt="" />
              <p className="text-[#727272] lg:text-[1rem] text-[0.3125rem] text-sm   font-[400] capitalize">
                Partnering with SidLabs has been a game-changer for our
                business. Their innovative AI solutions and exceptional support
                have streamlined our operations, boosted efficiency, and driven
                remarkable growth. Highly recommend their expertise and
                cutting-edge technology!"{" "}
              </p>
              <div className="flex flex-col w-full gap-1">
                <p className="text-[#252525]  text-[0.625rem] lg:text-[1rem] font-[600] capitalize">
                  David L.
                </p>
                <div className="flex w-full  items-center  justify-between  font-[400] capitalize text-[0.5rem] lg:text-[1rem] ">
                  <p className="text-[#727272] "></p>
                  <span className="flex gap-4 items-center">
                    <img src={star} alt="" />
                    <span className="text-[#0076B4]">5.0</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="border flex-shrink-0 w-[70%] lg:w-[24rem] border-[#0076B4] flex flex-col items-center bg-white gap-4 lg:py-6 lg:px-6 py-3 px-3 rounded-[0.4375rem] testimonial_card">
              <img className="self-start" src={Quotes} alt="" />
              <p className="text-[#727272] lg:text-[1rem] text-[0.3125rem] text-sm plus_Jakarta  font-[400] capitalize">
                The AI solutions provided by SidLabs have revolutionized our
                workflow. Their technology is both powerful and user-friendly,
                and their team is incredibly responsive and knowledgeable. We're
                thrilled with the results and couldn't ask for a better partner
                in innovation.{" "}
              </p>
              <div className="flex flex-col w-full gap-1">
                <p className="text-[#252525] plus_Jakarta text-[0.625rem] lg:text-[1rem] font-[600] capitalize">
                  Jessica M.
                </p>
                <div className="flex w-full justify-between plus_Jakarta font-[400] capitalize text-[0.5rem] lg:text-[1rem] ">
                  <p className="text-[#727272] "></p>
                  <span className="flex gap-4 items-center">
                    <img src={star} alt="" />
                    <span className="text-[#0076B4]">4.6</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
