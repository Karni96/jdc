type ITheCards = {
  title: string;
  img: string;
};

const TheCards: ITheCards[] = [
  {
    title: "Discover",
    img: "discover2.png",
  },
  {
    title: "Design",
    img: "design2.avif",
  },
  {
    title: "Develop",
    img: "develop.jpg",
  },

  {
    title: "Deploy",
    img: "deploy.jpg",
  },
  {
    title: "Optimize",
    img: " optimize.png",
  },
];

const HowBootcamp = () => {
  return (
    <>
      <div className="w-auto h-auto mt-2 mb-2  flex items-center justify-between gap-2 bg-black px-10 py-10 text-black  ">
        <div className=" bg-black w-[100%] pt-12 pb-18 rounded-t-[20px] rounded-b-[20px]">
          <div className=" bg-black w-[100%] pt-12 pb-18 rounded-t-[20px]">
            <h1 className=" text-white flex justify-center items-center text-7xl font-bold">
              How We Works
            </h1>
            <p className="text-white pt-12 flex justify-center items-center text-3xl">
              At Jdc Analytics, we follow a streamlined and{" "}
            </p>
            <p className="text-white pt- flex justify-center items-center text-3xl">
              collaborative process to deliver intelligent-AI
            </p>
            <p className="text-white pb-10 pt- flex justify-center items-center text-3xl">
              {" "}
              solutions tailored to your needs
            </p>
          </div>

          {/* <div className=' border border-red-500  h-[300px] gap-8 flex justify-center items-center mt-2 pt-2 pb-2  mb-2 rounded-[20px]  scroll-smooth'>
                    
                    <div className="w-[150px] h-[200px] border border-red-500 rounded-[20px] flex flex-row justify-center items-center  ">
                        <div className=' shadow-lg hover:shadow-blue-300/100 opacity-90 transition ease-in-out delay-200 mb-2 duration-300  rounded-[20px]'>
                            <img className=' transition ease-in-out delay-100  hover:-translate-y-1 w-[100px] h-[80px] duration-300  ' src="discover2.png" alt="" />
                            <div className='w-[200px]  '>
                                <h1 className=' text-white  text-xl font-bold flex justify-center'>Discover</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[150px] h-[200px] border border-red-500 rounded-[20px]  ">
                        <div className='shadow-lg hover:shadow-blue-300/100 opacity-90 transition ease-in-out delay-200 mb-2 duration-300  rounded-[20px]'>
                            <img className=' transition ease-in-out delay-100  hover:-translate-y-1  w-[100px] h-[80px]  duration-300  ' src="design2.avif" alt="" />
                            <div className='w-[200px]  '>
                                <h1 className='  text-white  text-xl font-bold flex justify-center'>Design</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[150px] h-[200px] border border-red-500 rounded-[20px]   ">
                        <div className='shadow-lg hover:shadow-blue-300/100 opacity-90 transition ease-in-out delay-200 mb-2  duration-300     rounded-[20px]'>
                            <img className=' transition ease-in-out delay-100  hover:-translate-y-1 w-[100px] h-[80px]  duration-300' src="develop.jpg" alt="" />
                            <div className='w-[200px]  '>
                                <h1 className=' text-white  text-xl font-bold flex justify-center items-center'>Develop</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[150px] h-[200px] border border-red-500 rounded-[20px]   ">
                        <div className='shadow-lg hover:shadow-blue-300/100 opacity-90 transition ease-in-out delay-200 mb-2 duration-300     rounded-[20px]'>
                            <img className='  transition ease-in-out delay-100  hover:-translate-y-1 w-[100px] h-[80px]4 duration-300' src="deploy.jpg" alt="" />
                            <div className='w-[200px]  '>
                                <h1 className=' text-white  text-xl font-bold grid justify- items-center '>Deploy</h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-[150px] h-[200px] border border-red-500 rounded-[20px]   ">
                        <div className=' shadow-lg hover:shadow-blue-300/100 opacity-90 transition ease-in-out delay-100 mb-2  duration-300  rounded-[20px]'>
                            <img className=' transition ease-in-out delay-100  hover:-translate-y-1 w-[100px] h-[80px]  duration-300 ' src="optimize.png" alt="" />
                            <div className='w-[200px]  '>
                                <h1 className=' text-white  text-xl font-bold grid justify-between items-center'>Optimize</h1>
                            </div>
                        </div>
                    </div>
                </div> */}

          <div className="flex flex-wrap justify-center items-center flex-col md:flex-row lg:flex-row gap-8 mt-10">
            {TheCards.map((item, index) => {
              return (
                <div
                  key={index}
                  className={` relative h-[200px] w-full md:w-[17%] min-w-[100px]  shadow-lg shadow-pink-500/100 opacity-90 rounded-[10px] border-2 border-slate-950 hover:bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent hover:text-blue-600 font-bold hover:text-3xl flex justify-center items-center hover:scale-[1.1]`}
                >
                  <img
                    src={item.img}
                    className=" w-full object-cover bg-orange-500 h-full rounded"
                    alt="Innovation-driven"
                  />
                  <h1 className="text-center flex justify-center items-center   pt-2 absolute hover:shadow-blue-600 ">
                    {item.title}
                  </h1>
                </div>
              );
            })}

            {/* <div className="h-[200px] w-[10%] min-w-[100px] p-5 shadow-lg shadow-pink-500/100 opacity-90 rounded-[10px] border-2 border-slate-950 hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:text-white">
            <img src="discover2.png" className="w-[100px] h-[80px] mt-3 rounded-[10px] mx-auto" alt="Innovation-driven" />
            <h1 className="text-center flex justify-center items-center text-blue-600  pt-2">Discover</h1>
            
          </div>

         
          <div className="h-[200px] w-[10%] min-w-[100px] p-5 shadow-lg shadow-pink-500/100 opacity-90 rounded-[10px] border-2 border-slate-950 hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:text-white">
            <img src="design2.avif" className="w-[100px] h-[80px] mt-3 rounded-[10px] mx-auto" alt="Client-Focused" />
            <h1 className="text-center flex justify-center items-center text-blue-600  pt-2">Design</h1>
            
          </div>

          
          <div className="h-[200px] w-[10%] min-w-[100px] p-5 shadow-lg shadow-pink-500/100 opacity-90 rounded-[10px] border-2 border-slate-950 hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:text-white">
            <img src="develop.jpg" className="w-[120px] h-[80px] mt-3 rounded-[10px] mx-auto" alt="Proven Track Record" />
            <h1 className="text-center flex justify-center items-center text-blue-600  pt-2">Develop</h1>
            
          </div>

          
          <div className="h-[200px] w-[10%] min-w-[100px] p-5 shadow-lg shadow-pink-500/100 opacity-90 rounded-[10px] border-2 border-slate-950 hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:text-black">
            <img src="deploy.jpg" className="h-[80px] w-[100px] mt-3 rounded-[10px] mx-auto" alt="End-to-End Support" />
            <h1 className="text-center flex justify-center items-center text-blue-600  pt-2">Deploy</h1>
            
          </div>

          <div className="h-[200px] w-[10%] min-w-[100px] p-5 shadow-lg shadow-pink-500/100 opacity-90 rounded-[10px] border-2 border-slate-950 hover:bg-gradient-to-r from-cyan-400 to-blue-500 hover:text-black">
            <img src="optimize.png" className="h-[80px] w-[100px] mt-3 rounded-[10px] mx-auto" alt="End-to-End Support" />
            <h1 className="text-center flex justify-center items-center text-blue-600  pt-2">Optimize</h1>
            
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowBootcamp;
