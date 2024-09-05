import React from "react";
import Img1 from "./assets/AiInsight1.png";
import Img2 from "./assets/AiInsight2.png";
import Img3 from "./assets/AiInsight3.png";

const AiInsights = () => {
  return (
    <div className="h-fit py-12   flex justify-center items-center">
      <div className="h-fit  w-[95%] flex flex-col lg:items-start items-center gap-12">
        <header className="plus_Jakarta font-[600] flex items-center lg:block flex-col gap-3">
          <h1 className="text-[#0076B4] text-[1.375rem] lg:text-[2.4375rem] ">
            AI Insights
          </h1>
          <p className="uppercase text-[0.6875rem] lg:text-[1.8125rem]">
            Stay Updated with the Latest News and Developments
          </p>
        </header>
        <div className="lg:text-[1rem] text-[0.3125rem] text-sm [scrollbar-width:none] overflow-x-auto ">
          <div
            className="flex lg:gap-12 gap-6 lg:justify-between"
            data-aos="fade-left"
          >
            <div className="flex-shrink-0 border duration-300 ease-in-out hover:border-[#0077B4] bg-white rounded-[1.4375rem] lg:w-[30%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              <img src={Img1} alt="" />
              <h1 className="newstitle text-[0.875rem] lg:text-[1.5rem]">
                Industry Update
              </h1>
              <p className="newsPara lg:text-[1rem] text-[0.3125rem] text-sm t">
                There has been significant progress in using AI for medical
                diagnostics, personalized medicine, drug discovery, and
                improving patient care.
              </p>
              <span className="newsPara lg:text-[1rem] text-[0.3125rem] text-sm ">
                Increased attention on the ethical implications of AI, including
                fairness, transparency, bias mitigation, and responsible
                deployment of AI systems.
              </span>
            </div>
            <div className="  flex-shrink-0 border duration-300 ease-in-out hover:border-[#0077B4] bg-white rounded-[1.4375rem] lg:w-[30%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              <img src={Img2} alt="" />
              <h1 className="newstitle text-[0.875rem] lg:text-[1.5rem]">
                Online Tech Education
              </h1>
              <p className="lg:text-[1rem] text-[0.3125rem] text-sm newsPara">
                Online tech education has witnessed a surge in accessibility,
                with platforms offering diverse courses in various languages,
                catering to global audiences.
              </p>
              <span className=" lg:text-[1rem] text-[0.3125rem] text-sm newsPara ">
                Emphasis on skill-based learning has grown, with platforms
                offering specialized courses in emerging tech fields such as AI,
                cybersecurity and data science.
              </span>
            </div>
            <div className="flex-shrink-0 border duration-300 ease-in-out hover:border-[#0077B4] bg-white rounded-[1.4375rem] lg:w-[30%] w-[90%] px-4 py-8 flex flex-col gap-6 hover:scale-95 cursor-pointer">
              <img src={Img3} alt="" />
              <h1 className="newstitle text-[0.875rem] lg:text-[1.5rem]">
                Modern Age Parenting
              </h1>
              <p className="lg:text-[1rem] text-[0.3125rem] text-sm newsPara ">
                With the rise of technology, there's a surge in digital tools
                aiding parents—from apps monitoring child activities to
                educational platforms offering interactive learning experiences.
              </p>
              <span className="lg:text-[1rem] text-[0.3125rem] text-sm newsPara">
                Online forums, social media groups, and virtual communities are
                thriving, offering a space for parents.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiInsights;
