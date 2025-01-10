

const cards = [
  { title: "Innovation", img: "inovation.png" },
  { title: "Discover", img: "discover1.png" },
  { title: "Develop", img: "develop.png" },
  { title: "Optimize", img: "optimize.avif" },
  { title: "Track Record", img: "ProvenTrackRecord.avif" },
];

const Whocan = () => {
  return (
    <div className="w-full bg-black text-white mt-5 mb-5 pt-10 pb-10 rounded-2xl shadow-lg hover:shadow-green-900">
      {/* Section Title */}
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-4xl w-[90%] md:w-[400px] text-center rounded-[10px] bg-blue-400 py-2 hover:shadow-[blue_-1px_-1px_11px_10px] md:opacity-90 text-white">
          We Work In This Manner
        </h1>
      </div>

      {/* Cards Section */}
      <div className=" flex gap-4 md:gap-6 flex-col md:flex-row px-4 justify-evenly">
        {cards.map((item, i) => (
          <div
            key={i}
            className={`rounded-[10%] mb-4 hover:scale-[1.1] md:my-0 p-6 shadow-lg bg-blue-400 hover:shadow-[blue_-1px_-1px_11px_10px] opacity-90 ${
               i===0 ? "bg-green-500" : i===1 ? "bg-blue-500" : i===2 ? " bg-purple-600" : i === 3 ? "bg-red-700" : i===4 ? "bg-yellow-400" : ""
            }`}
          >
            <div className="flex justify-center">
              <img
                className="w-40 h-32 rounded-[20px]"
                src={item.img}
                alt={item.title}
              />
            </div>
            <p className="text-white font-bold text-xl mt-4 text-center">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whocan;
