"use client";
import React, { useEffect, useState } from 'react';
import CountUp from "react-countup";

const Achievements: React.FC = () => {
  const [triggerCount, setTriggerCount] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setTriggerCount(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className='achive sm:max-h-[312px] sm:h-[312px] w-full text-white flex justify-center items-center xs:flex-col py-3'>
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold xs:text-lg">
          <CountUp end={35} suffix="+" start={triggerCount ? 0 : undefined} duration={8}/>
        </h1>
        <h1 className="font-semibold">Team Members</h1>
      </div>
      <div className="sm:w-[2px] sm:h-[120px] w-[120px] h-[2px] bg-white xs:"></div>
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold xs:text-lg">
          <CountUp end={200} suffix="+" start={triggerCount ? 0 : undefined} duration={5}/>
        </h1>
        <h1 className="font-semibold">Projects</h1>
      </div>
      <div className="sm:w-[2px] sm:h-[120px] w-[120px] h-[2px] bg-white"></div>
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold xs:text-lg">
          <CountUp end={210} start={triggerCount ? 0 : undefined} duration={5}/>
        </h1>
        <h1 className="font-semibold">Happy Clients</h1>
      </div>
      <div className="sm:w-[2px] sm:h-[120px] w-[120px] h-[2px] bg-white"></div>
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold xs:text-lg">
          <CountUp end={300} start={triggerCount ? 0 : undefined} duration={5}/>
        </h1>
        <h1 className="font-semibold">Successful Projects</h1>
      </div>
    </section>
  );
};

export default Achievements;
