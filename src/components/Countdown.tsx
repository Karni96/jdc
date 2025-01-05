import React from 'react';

const Countdown = () => {
  return (
    <div className="bg-slate-300 py-10 px-2">
      <div className="flex flex-wrap items-center justify-center gap-6">
        {[
          { value: "70+", label: "Projects Completed" },
          { value: "95%", label: "Client Retention" },
          { value: "9", label: "Global Locations" },
          { value: "10+", label: "Global Employees" },
        ].map((item, index) => (
          <div
            key={index}
            className="border-2 border-solid border-black p-6 text-center min-w-[150px] rounded-lg bg-white shadow-md"
          >
            <h1 className="text-3xl font-bold">{item.value}</h1>
            <p className="text-lg font-medium mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
