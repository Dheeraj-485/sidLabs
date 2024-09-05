import React from "react";
import contactImg from "./assets/Contact.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="contact"
      className="h-fit lg:py-20 py-6 w-full flex justify-center items-center"
      data-aos="fade-up"
    >
      <div className="flex w-[80%] justify-between gap-16">
        <div className="hidden lg:block">
          <img src={contactImg} alt="Contact Us" />
        </div>
        <div className="lg:w-[65%] h-fit flex flex-col items-center lg:items-start gap-4">
          <header className="text-black bebas text-[0.9375rem] lg:text-[2.25rem] font-[400] tracking-[0.01563rem]">
            Stay In Touch With Us
          </header>

          <div className="lg:hidden block w-[65%]">
            <img src={contactImg} alt="Contact Us" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start w-[85%] gap-4 lg:gap-9"
          >
            <input
              type="text"
              name="name"
              className="rounded-md border-[0.5] bg-white  shadow-[#0077b426] shadow-sm-light text-[0.625rem] lg:text-[1rem] w-full plus_Jakarta h-[2.10125rem] lg:h-[3.2rem] outline-none"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="rounded-md border-[0.5] bg-white  shadow-[#0077b426] shadow-sm-light text-[0.625rem] lg:text-[1rem] w-full plus_Jakarta h-[2.10125rem] lg:h-[3.2rem] outline-none"
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="subject"
              className="rounded-md border-[0.5] bg-white  shadow-[#0077b426] shadow-sm-light text-[0.625rem] lg:text-[1rem] w-full plus_Jakarta h-[2.10125rem] lg:h-[3.2rem] outline-none"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              rows="8"
              className="rounded-md border-[0.5] bg-white  shadow-[#0077b426] shadow-sm-light text-[0.625rem] lg:text-[1rem] w-full plus_Jakarta outline-none pt-2"
              placeholder="Type Message Here"
              required
            ></textarea>
            <button
              type="submit"
              className=" px-8 py-2 bg-[#0076B4] rounded-[1.875rem] tracking-wider active:bg-blue-900 text-white self-center lg:self-start lg:text-[1rem] text-[0.6875rem] font-[600]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
