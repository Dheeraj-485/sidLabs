import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="h-fit pt-12 pb-2 lg:pb-6 flex justify-center ">
      <div
        id="explore"
        className=" lg:text-[1rem] text-[0.3125rem] text-sm w-[95%]  h-fit flex flex-col justify-between items-center lg:items-start gap-5"
      >
        <header className="lg:relative lg:top-6 flex flex-col items-center lg:block">
          <h2 className="plus_Jakarta w-fit text-[#0076B4] text-[1.375rem] lg:text-[2.4375rem] font-[600]">
            Explore
          </h2>
          <p className="lg:text-[1.8125rem] pt-1 text-[0.6875rem] font-[600] uppercase seperate_color">
            OUR FLAGSHIP PROJECTS
          </p>
        </header>
        <div
          className=" lg:text-[1rem] text-[0.3125rem] text-sm lg:h-[80vh] h-fit flex lg:flex-row flex-col justify-between lg:items-start items-center lg:gap-8 gap-6 relative"
          data-aos="fade-up"
        >
          <Link
            to="https://aiwisepartners.com/"
            target="_blank"
            className="rounded-xl border-2 bg-white border-sky-600 shadow-sm-light shadow-sky-600 lg:w-[31%] w-[75%] h-fit flex justify-center items-center lg:self-end cursor-pointer duration-300 ease-in hover:scale-105"
          >
            <div className="lg:w-[95%] lg:h-[95%] w-[96%] h-[99%] my-1 flex flex-col items-center lg:py-2 lg:my-2 bg-[#EFF9FF] relative">
              <p className="lg:my-8 my-3 w-[1.375rem] h-[1.375rem] lg:w-[3.125rem] lg:h-[3.125rem] flex items-center justify-center bg-[#0077B4]  rounded-[50%] text-white plus_Jakarta text-[1.125rem] lg:text-[1.5rem] font-[600]">
                1
              </p>
              <header className="lg:pb-8 pb-3 w-[90%] seperate_color text-center plus_Jakarta text-[0.75rem] lg:text-[1.5rem] font-[600]">
                [AI]wise Partners: Revolutionizing Business Intelligence
              </header>
              <p className="w-[90%]  text-black text-[0.625rem] lg:text-[1rem] font-[500] pb-8 lg:pb-12">
                Dive into the future of business intelligence with [AI]wise
                Partners. This cutting-edge solution harnesses the power of
                artificial intelligence to provide unparalleled insights,
                helping businesses make data-driven decisions with confidence.
              </p>
              <img
                className="absolute -bottom-2 hidden lg:block"
                src="/assets/FlagShipCard-a2530586.svg"
                alt=""
              />
              <img
                className="absolute -bottom-1 lg:hidden"
                src="/assets/FlagShipCard-f68715bd.svg"
                alt=""
              />
            </div>
          </Link>
          <div className="rounded-xl border-2 bg-white border-sky-600 shadow-sm-light shadow-sky-600 lg:mt-[6%] lg:w-[31%] w-[75%] h-fit flex justify-center items-center cursor-pointer duration-300 ease-in hover:scale-105">
            <Link
              to="https://www.awarewilderness.com/"
              target="_blank"
              className=" h-fit flex justify-center items-center"
            >
              <div className="lg:w-[95%] lg:h-[95%] w-[96%] h-[99%] my-1 flex flex-col items-center lg:py-2 lg:my-2 bg-[#EFF9FF] relative">
                <p className="lg:my-8 my-3 w-[1.375rem] h-[1.375rem] lg:w-[3.125rem] lg:h-[3.125rem] flex items-center justify-center bg-[#0077B4]  rounded-[50%] text-white plus_Jakarta text-[1.125rem] lg:text-[1.5rem] font-[600]">
                  2
                </p>
                <header className="lg:pb-8 pb-3 w-[90%] seperate_color  text-center plus_Jakarta text-[0.75rem] lg:text-[1.5rem] font-[600]">
                  AwareWilderness: CRAFTING MEMORIES
                </header>
                <p className="w-[90%]  text-black text-[0.625rem] lg:text-[1rem] font-[500] pb-8 lg:pb-12">
                  Empowering travelers to embark on transformative journeys that
                  not only satisfy their wanderlust but also contribute to the
                  conservation and preservation of our planet's precious
                  wilderness.
                </p>
                <img
                  className="absolute -bottom-2 hidden lg:block"
                  src="/assets/FlagShipCard-a2530586.svg"
                  alt=""
                />
                <img
                  className="absolute -bottom-1 lg:hidden"
                  src="/assets/FlagShipCard-f68715bd.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div className="rounded-xl border-2 bg-white border-sky-600 shadow-sm-light shadow-sky-600 lg:w-[31%] w-[75%] h-fit flex justify-center items-center cursor-pointer duration-300 ease-in hover:scale-105">
            <Link
              to="https://care.talktomissmp.com/"
              target="_blank"
              className=" h-fit flex justify-center items-center"
            >
              <div className="lg:w-[95%] lg:h-[95%] w-[96%] h-[99%] my-1 flex flex-col items-center lg:py-2 lg:my-2 bg-[#EFF9FF] relative">
                <p className="lg:my-8 my-3 w-[1.375rem] h-[1.375rem] lg:w-[3.125rem] lg:h-[3.125rem] flex items-center justify-center bg-[#0077B4]  rounded-[50%] text-white plus_Jakarta text-[1.125rem] lg:text-[1.5rem] font-[600]">
                  3
                </p>
                <header className="lg:pb-8 pb-3 w-[90%] seperate_color  text-center plus_Jakarta text-[0.75rem] lg:text-[1.5rem] font-[600]">
                  CARE Platform
                </header>
                <p className="w-[90%]  text-black text-[0.625rem] lg:text-[1rem] font-[500] pb-8 lg:pb-12">
                  CARE utilizes a comprehensive framework to evaluate and
                  recommend child-friendly apps, videos, and games, ensuring
                  your child’s digital interactions are both enriching and safe.
                </p>
                <img
                  className="absolute -bottom-2 hidden lg:block"
                  src="/assets/FlagShipCard-a2530586.svg"
                  alt=""
                />
                <img
                  className="absolute -bottom-1 lg:hidden"
                  src="/assets/FlagShipCard-f68715bd.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div className="border hidden lg:block border-[#0077B4] absolute w-full top-[52%] -z-10"></div>
          <div className="border block lg:hidden border-[#0077B4] absolute h-full top-[0%] -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
