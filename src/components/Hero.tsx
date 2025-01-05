const Hero = () => {
  return (
    <>
      <div className=" w-full relative bg-black flex flex-col px-2">
        {/* Background Image */}
        <img
          className="w-full h-[700px]  "
          src="backgound4.gif"
          alt="Background"
        />
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col sm:flex-row justify-center sm:justify-between items-center px-5 sm:px-10 top-[250px] sm:top-[300px] lg:top-[350px]">
          {/* Text Content */}
          <div className="text-center md:flex md:flex-col sm:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              AI-Powered Solutions
            </h1>
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              for Every Challenge.
            </h1>
          </div>

          {/* Subtext and Button */}
          <div className="mt-6 sm:mt-0 text-center sm:text-left space-y-3">
            <p className="text-lg sm:text-xl text-yellow-300">
              We're an AI-powered innovation hub,
            </p>
            <p className="text-lg sm:text-xl text-yellow-300">
              transforming technology into intelligent
            </p>
            <p className="text-lg sm:text-xl text-yellow-300">
              solutions for a smarter tomorrow.
            </p>
            <button className="mt-4 bg-transparent  text-yellow-300 font-medium py-2 px-4 rounded hover:bg-yellow-300 hover:text-black transition duration-300">
              See Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;





