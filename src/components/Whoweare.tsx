

const Whoweare = () => {
  return (
    <section className="pt-14 pb-14 bg-black text-white px-4">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col items-center">
        {/* Title Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Who We Are
          </h1>
        </header>

        {/* Content Section */}
        <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-center sm:text-left">
          <p>
            At JDC Analytics, we turn ideas into intelligent solutions. As a
            leading AI software development company, we craft cutting-edge
            technology to drive growth, streamline operations, and solve complex
            challenges for businesses worldwide.
          </p>
          <p>
            With a team of experts in AI, data science, and machine learning, we
            blend creativity and innovation to deliver tailored solutions that
            exceed expectations. Let us help you shape the future with smart,
            scalable software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
