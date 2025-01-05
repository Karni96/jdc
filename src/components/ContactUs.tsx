import React from "react";

const ContactUs = () => {
  return (
    <>
      <div
      id="contact-us"
        className="flex flex-col md:flex-row mt-10 w-full h-auto md:h-[100vh] justify-between bg-white"
      >
        {/* Left Section */}
        <div className="w-full md:w-[50%] pt-10 md:pt-20 bg-blue-700 pb-10 flex flex-col items-center text-center ">
          <a href="">
            <img
              className="w-[150px] md:w-[200px] mb-5"
              src="jdclogo.png"
              alt="logoimg"
            />
          </a>
          <h4 className="text-yellow-400 text-center md:text-left">
            Have a project in mind?
          </h4>
          <h1 className="text-4xl md:text-7xl text-white text-center md:text-left mt-4">
            Let's talk!
          </h1>
          {/* <div className="flex items-center mt-10">
            <img className="w-16 md:w-20" src="icon.svg" alt="icon" />
            <div className="pl-5">
              <h3 className="text-white">Aleksandra Laton</h3>
              <p className="text-white">Account Executive</p>
            </div>
          </div> */}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[50%] p-5 md:p-10">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <label className="mb-2 md:mb-0 md:mr-4 w-full md:w-[30%]" htmlFor="">
                Enter your name
              </label>
              <input
                className="w-full md:w-[70%] p-2 border-0 outline-none border-b-2 border-b-black"
                type="text"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <label className="mb-2 md:mb-0 md:mr-4 w-full md:w-[30%]" htmlFor="">
                Company name
              </label>
              <input
                className="w-full md:w-[70%] p-2 border-0 outline-none border-b-2 border-b-black"
                type="text"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <label className="mb-2 md:mb-0 md:mr-4 w-full md:w-[30%]" htmlFor="">
                Company e-mail
              </label>
              <input
                className="w-full md:w-[70%] p-2 border-0 outline-none border-b-2 border-b-black"
                type="email"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <label className="mb-2 md:mb-0 md:mr-4 w-full md:w-[30%]" htmlFor="">
                Project Overview
              </label>
              <textarea
                className="w-full md:w-[70%] p-2 border-0 outline-none border-b-2 border-b-black rows = 4 "     />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <label className="mb-2 md:mb-0 md:mr-4 w-full md:w-[30%]" htmlFor="">
                Add files (optional)
              </label>
              <input
                className="w-full md:w-[70%] p-2"
                type="file"
              />
            </div>

            <div className="flex justify-center mt-5">
              <button
                className="bg-indigo-500 text-white font-bold py-2 px-8 rounded-lg hover:bg-indigo-600 transform hover:scale-110 transition-transform duration-300"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
