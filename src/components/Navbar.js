// src/components/Header.js
import React from "react";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-6">
        <div className="flex items-center">
          <img src={Logo} alt="SidLabs Logo" className="h-8" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="#about"
                className="text-sky-600 border border-sky-600 rounded-[0.2rem]  lg:py-1 lg:px-2 lg:text-[1rem] text-[0.3125rem] text-sm duration-500 ease-in   hover:bg-sky-600 hover:text-white hover:shadow-2xl  font-medium  px-2 py-1  dark:bg-sky-600 "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                className="text-sky-600 border border-sky-600 rounded-[0.2rem]  lg:py-1 lg:px-2 lg:text-[1rem] text-[0.3125rem] duration-500 ease-in   hover:bg-sky-600 hover:text-white hover:shadow-2xl  font-medium  text-sm px-2 py-1  dark:bg-sky-600 "
              >
                {" "}
                Flagship Projects
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                className="text-sky-600 border border-sky-600 rounded-[0.2rem]  lg:py-1 lg:px-2 lg:text-[1rem] text-[0.3125rem] duration-500 ease-in   hover:bg-sky-600 hover:text-white hover:shadow-2xl  font-medium  text-sm px-2 py-1  dark:bg-sky-600 "
              >
                Contact Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import Logo from "./assets/Logo.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center">
//       <img className="h-8 w-20" src={Logo} />
//       <div className="flex gap-4">
//         <button
//           type="button"
//           className="text-sky-600 border border-sky-600 rounded-[0.]  lg:py-1 lg:px-2 lg:text-[1rem] text-[0.3125rem] duration-500 ease-in   hover:bg-sky-600 hover:text-white hover:shadow-2xl  font-medium  text-sm px-2 py-1  dark:bg-sky-600 "
//         >
//           About us
//         </button>
//         <button className="border border-[#0077B4]  rounded-[0.1875rem] lg:py-1 lg:px-2 text-[#0077B4] lg:text-[1rem] text-[0.3125rem] py-1 px-2 font-[700]plus_Jakarta duration-300 ease-in hover:bg-[#0076B4] hover:text-white hover:shadow-2xl">
//           <Link to="/about">About Us</Link>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// // import React from "react";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   return (
// //     <>
// //       <nav className="bg-white border-gray-200 dark:bg-gray-900">
// //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
// //           <Link
// //             to="https://flowbite.com/"
// //             className="flex items-center space-x-3 rtl:space-x-reverse"
// //           >
// //             <img
// //               src="https://flowbite.com/docs/images/logo.svg"
// //               className="h-8"
// //               alt="Flowbite Logo"
// //             />
// //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
// //               Flowbite
// //             </span>
// //           </Link>
// //           <button
// //             data-collapse-toggle="navbar-default"
// //             type="button"
// //             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// //             aria-controls="navbar-default"
// //             aria-expanded="false"
// //           >
// //             <span className="sr-only">Open main menu</span>
// //             <svg
// //               className="w-5 h-5"
// //               aria-hidden="true"
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 17 14"
// //             >
// //               <path
// //                 stroke="currentColor"
// //                 stroke-linecap="round"
// //                 stroke-linejoin="round"
// //                 stroke-width="2"
// //                 d="M1 1h15M1 7h15M1 13h15"
// //               />
// //             </svg>
// //           </button>
// //           <div className="hidden w-full md:block md:w-auto" id="navbar-default">
// //             <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
// //               <li>
// //                 <Link
// //                   to="#"
// //                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
// //                   aria-current="page"
// //                 >
// //                   Home
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="#"
// //                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                 >
// //                   About
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="#"
// //                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                 >
// //                   Services
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="#"
// //                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                 >
// //                   Pricing
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link
// //                   to="#"
// //                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
// //                 >
// //                   Contact
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   );
// // };

// // export default Navbar;
