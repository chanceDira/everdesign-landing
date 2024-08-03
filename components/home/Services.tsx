"use client"
import { services } from "@/constants/cardsData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import ServicesCard from "../ui/ServicesCard";
import AOS from "aos";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
    data-aos="fade"
    data-aos-offset="300"
    data-aos-easing="ease-in"
     id="services" className="min-h-screen w-screen flex flex-col items-center justify-center lg:px-[119px] mb-[200px] px-4">
      <h1 className="text-sm text-gray-700">Services</h1>
      <h1 className="font-bold mb-[80px] text-4xl">Providing quality services</h1>
      <div className="sm:grid sm:grid-cols-4 gap-5  flex flex-col max-w-[1440px]">
        {services.map((service: any, i: number) => (
          <ServicesCard
            img={service.img}
            title={service.title}
            description={service.description}
            link={service.link}
            count={i}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
