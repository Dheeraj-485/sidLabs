// src/components/Mission.js
import React from "react";
import Pic from "./assets/Mission.png";

const Mission = () => {
  return (
    <div className=" h-fit pt-8 lg:pt-16 flex justify-center items-center ">
      <div className="  w-[95%] h-fit flex lg:justify-between  justify-center">
        <div className="lg:w-1/2 w-[90%] text-center lg:text-start items-center lg:items-start flex flex-col gap-6 pr-0 lg:pr-20 lg:pt-6">
          <header className="text-[#0076B4]  text-[1.375rem] lg:text-[2.4375rem] font-[600] ">
            Our Mission
          </header>
          <h3 className="  text-[0.6875rem] lg:text-[1.8125rem] seperate_color font-[600] uppercase ">
            Elevating humanity through innovation and technology is our mission.
          </h3>
          <div className="w-2/3 lg:hidden block " data-aos="zoom-in">
            <img src={Pic} alt="" />
          </div>
          <p className="lg:text-[1rem] text-[0.3125rem] text-sm font-[400]">
            Our vision is to reduce the gap in harnessing technology, towards
            human evolution! We belief that every technological solution should
            be purposeful and aligned with the unique needs of the user.
            One-size-fits-all approaches are outdated; instead, we advocate for
            solutions that are tailored, intuitive, and genuinely enhance the
            human experience.
          </p>
        </div>
        <div
          className="w-1/2 lg:flex lg:justify-center hidden"
          data-aos="zoom-in"
        >
          <img src={Pic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
// // src/components/Mission.js
// import React from "react";
// import Pic from "./assets/Mission.png";

// const Mission = () => {
//   return (
//     <section classNameName="bg-gray-50 py-20">
//       <div classNameName="container mx-auto px-8 md:px-16">
//         <h2 classNameName="text-4xl md:text-5xl font-bold text-blue-600 mb-10 text-center">
//           Our Mission
//         </h2>
//         <div classNameName="flex flex-col md:flex-row items-center justify-between">
//           {/* Text content */}
//           <div classNameName="md:w-1/2 lg:w-2/5 mb-8 md:mb-0 md:pr-10">
//             <p classNameName="text-lg md:text-xl leading-relaxed text-gray-700 text-center md:text-left">
//               Elevating humanity through innovation and technology is our
//               mission. Our vision is to reduce the gap in harnessing technology,
//               towards human evolution! We believe that every technological
//               solution should be purposeful and aligned with the unique needs of
//               the user. One-size-fits-all approaches are outdated; instead, we
//               advocate for solutions that are tailored, intuitive, and genuinely
//               enhance the human experience.
//             </p>
//           </div>
//           {/* Images */}
//           <div classNameName="flex md:w-1/2 lg:w-3/5 justify-center md:justify-start space-x-4">
//             <img
//               src={Pic}
//               alt="AI Innovation"
//               classNameName="h-56 md:h-64 lg:h-72 w-auto"
//             />
//             <img
//               src="/path/to/robot-arm-image.png"
//               alt="Robotic Arm"
//               classNameName="h-56 md:h-64 lg:h-72 w-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;
