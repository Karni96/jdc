const TechnologiesandFrameworks = () => {
  const techData = [
    { src: "python.svg", alt: "Python Logo", text: "PYTHON", iconSize: "w-10" },
    { src: "azure.svg", alt: "Azure Logo", text: "AZURE", iconSize: "w-10" },
    { src: "django.svg", alt: "Django Logo", text: "DJANGO", iconSize: "w-10" },
    { src: "nodejs.jpg", alt: "Node.js Logo", text: "NODE.JS", iconSize: "w-20" },
    { src: "react.svg", alt: "React Logo", text: "REACT", iconSize: "w-14" },
    { src: "rust.jpg", alt: "Rust Logo", text: "RUST", iconSize: "w-20" },
    { src: "elastic.svg", alt: "Elastic Stack Logo", text: "ELASTIC STACK", iconSize: "w-32" },
    { src: "VUE.png", alt: "Vue.js Logo", text: "VUE.JS", iconSize: "w-14" },
    { src: "flask.svg", alt: "Flask Logo", text: "FLASK", iconSize: "w-12" },
    { src: "KUBERNETES.png", alt: "Kubernetes Logo", text: "KUBERNETES", iconSize: "w-12" },
    { src: "node-js-2.png", alt: "Node.js Logo (Alt)", text: "NODE.JS", iconSize: "w-20" },
    { src: "nestjs.svg", alt: "Nest.js Logo", text: "NEST.JS", iconSize: "w-12" },
    { src: "aws.svg", alt: "AWS Logo", text: "AWS", iconSize: "w-12" },
    { src: "fastapi.svg", alt: "FastAPI Logo", text: "FAST API", iconSize: "w-12" },
    { src: "docker.svg", alt: "Docker Logo", text: "DOCKER", iconSize: "w-20" },
  ];

  return (
    <div id="Technologies" className="w-full px-4 flex justify-center flex-col">
      {/* Header Section */}
      <div className="flex justify-center items-center gap-x-4  mb-8">
        <h1 className="text-2xl font-bold hover:underline">Technologies and Frameworks</h1>
      </div>

      {/* Technology Cards */}
      <div className=" flex justify-evenly flex-wrap gap-4 ">
        {techData.map((item, index) => (
          <div
            key={index}
            className=" w-40 md:w-40 h-40 md:h-36 bg-red-50 flex flex-col items-center justify-center text-sm text-center my-auto rounded-full md:rounded-md hover:scale-[1.1] "
          >
            <img className={item.iconSize} src={item.src} alt={item.alt} />
            <p className=" font-bold text-center hidden md:block">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesandFrameworks;
