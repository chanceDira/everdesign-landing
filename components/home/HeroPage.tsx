"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";

const HeroPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="Hero   flex flex-col mx-auto max-h-screen xs:justify-center img:items-center xs:items-center  w-full h-screen">
      <div className="sm:max-w-5xl flex flex-col  items-center justify-center min-h-screen xs:h-fit xs:gap-3 gap-4 max-w-full">
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in"
          className="w-full mt-12 xs:w-full xs:mt-9 xs:px-3 flex flex-col gap-6 xs:gap-2 items-start px-10 md:px-[119px]"
        >
          <h1 className="text-white text-lg w-full">Welcome to Everdesign</h1>
        
          <div className=" flex flex-col font-bold text-2xl md:text-6xl">
            <div><span className=" text-white">We help you</span><span className=" text-secondary">build your</span></div>
            <div><span className=" text-secondary">dream</span><span className=" text-white">professionally</span></div>
          </div>
          <p className="my-4 text-base text-white max-w-[562px] w-full xs:max-w-[300px]">
          Ever Design is a young architectural firm in Kigali with a great passion for designing outstanding architecture and challenging the status quo. Our residential designs have a successful track record in Rwanda.
          </p>
          <button
            className="bg-secondary py-3 px-6 text-white rounded-xl hover:opacity-60 text-sm font-semibold"
          >
            <Link href="#services">Explore our Services</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
