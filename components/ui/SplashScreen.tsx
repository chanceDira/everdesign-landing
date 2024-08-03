import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SplashScreen = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      data-aos="zoom-in"
      data-aos-offset="300"
      data-aos-easing="ease-in"
      className="w-screen h-screen flex items-center justify-center bg-white"
    >
      <Image src="/icons/logo.svg" height={150} width={150} alt="" />
    </section>
  );
};

export default SplashScreen;
