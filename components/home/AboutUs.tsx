import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="about-us"
    data-aos="fade"
    data-aos-offset="300"
    data-aos-easing="ease-in"
     className="lg:px-[100px] min-h-screen w-screen flex flex-col md:flex-row items-center justify-center flex-1 gap-[85px] xs:flex-col-reverse px-4 mb-24">
      <div className="flex gap-5 xs:flex-col">
        <Image
          src="/images/img3.svg"
          alt=""
          sizes="100%"
          width={755}
          height={1245}
        />
   
      </div>
      <div className="max-w-[562px] flex flex-col gap-6 items-start">
        <h1 className="text-base text-slate-500">About Us</h1>
        <h1 className="text-4xl font-bold">We are  one of the largest construction company</h1>
        <p className="text-base text-slate-500">
        ver Design Group is a leading architectural and investment firm in Rwanda,  known for its innovative design and strategic expansion into the hospitality sector.  The company excels in offering comprehensive solutions, including design,  construction, and management of villa projects, catering to both residential  and commercial clients.
        </p>
        <button className="bg-secondary py-3 px-6 text-white rounded-xl hover:opacity-60 text-sm font-semibold">
          <Link href="#contact-u">Learn More</Link>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
