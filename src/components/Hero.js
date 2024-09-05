// src/components/Hero.js
import React from "react";
import HeroSectionPc from "./assets/HeroSectionPc.png";
import HeroSectionMobile from "./assets/HeroSectionMobile.png";

const Hero = () => {
  return (
    <div
      className="h-fit w-[100vw] lg:h-fit justify-between relative flex flex-col items-center "
      data-aos="fade-up"
    >
      <img
        className="w-full h-[100vh] absolute top-0 left-0 -z-10 hidden sm:block"
        src={HeroSectionPc}
        alt="Main Hero Image"
      />
      <img
        className="w-full h-fit top-0 left-0 -z-10 block sm:hidden md:object-cover object-contain"
        src={HeroSectionMobile}
        alt=""
      />
      <div className=" z-0 gap-1 absolute sm:relative lg:gap-0 pt-[20%] lg:pt-[0%] h-[fit] w-[95vw] lg:h-[70vh] flex flex-col justify-end lg:mr-10 pr-[1rem] lg:mb-40 text-sky-600 ">
        <h1 className=" text-[1rem] font-[400] text-right lg:text-[6rem] lg:font-[400]">
          A venture studio
        </h1>
        <p className=" text-[0.75rem] lg:text-[2.125rem] text-right font-[400]">
          Advancing Human Intelligence <br /> Through Innovation
        </p>
      </div>
      <div className=" w-fit flex sm:relative absolute bottom-0 flex-col text-[0.65rem] items-center text-sky-600  text-center lg:text-[1.125rem] font-[400] lg:gap-2 lg:pb-0 pb-2">
        <p>Explore More</p>
        <img
          className="w-[0.85rem] lg:w-fit"
          src="/assets/ExploreDownArrow-41ca6474.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
// // src/components/Hero.js
// import React from "react";
// import HeroSection from "./assets/HeroSection.png";

// const Hero = () => {
//   return (
//     <section className="h-fit w-[100vw] lg:h-fit justify-between relative flex flex-col items-center">
//       {/* Background Image and Graphic */}

//       <img
//         src={HeroSection}
//         alt="Abstract Graphic"
//         className="w-full h-[100vh] absolute top-0 left-0 -z-10 hidden sm:block"
//       />

//       {/* Content Wrapper */}
//       <div className="relative z-10 container mx-auto px-6 py-24 md:py-40 text-right">
//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-7xl font-bold text-sky-600 mb-4">
//           A Venture Studio
//         </h1>

//         {/* Subheading */}
//         <p className="text-xl md:text-2xl text-gray-700">
//           Advancing Human Intelligence Through Innovation
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;
