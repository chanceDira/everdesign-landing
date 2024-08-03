"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";

const HeroPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="Hero sm:pb-20 sm:pt-20 mb-[52px] flex flex-col mx-auto max-h-screen xs:justify-center img:items-center xs:items-center xs:pt-12 xs:pb-3 w-full h-screen">
      <div className="sm:max-w-5xl flex flex-col  items-center xs:h-fit xs:gap-3 gap-4 max-w-full">
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in"
          className="w-full mt-12 xs:w-full xs:mt-9 xs:px-3 flex flex-col gap-6 xs:gap-2 items-start px-[119px]"
        >
          <h1 className="text-white text-lg w-full">Welcome to Everdesign</h1>
          <h1 className=" leading-[74.2px] font-bold text-white sm:text-5xl text-[56px] w-full xs:text-2xl">
            We’re here to help you <br /> build your dream <br /> professionaly
          </h1>
          <p className="my-4 text-base text-white max-w-[562px] w-full xs:max-w-[300px]">
          Welcome to Ever Design Group Ltd., where creativity meets expertise in real
estate, construction, and hospitality. We are proud to offer a comprehensive suite of services that
include real estate investment, Airbnb management, and bespoke design and construction. Our
mission is to create spaces that not only look exceptional but also provide significant financial
returns.
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
