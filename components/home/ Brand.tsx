import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brand = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center gap-32 justify-center w-full bg-primary">
      <div className=" flex flex-col w-4/5 md:w-1/3">
        <div className=" mt-20 md:mt-1 flex flex-col font-bold text-white text-2xl md:text-6xl">
          We’re here to help you build your dream{" "}
        </div>
        <p className="my-4 font-light text-base text-white max-w-[562px] w-full xs:max-w-[300px]">
          Ever Design is a young architectural firm in Kigali with a great
          passion for designing outstanding architecture and challenging the
          status quo. Our residential designs have a successful track record in
          Rwanda.{" "}
        </p>
        <button className="bg-secondary w-fit py-3 px-6 text-white rounded-xl hover:opacity-60 text-sm font-semibold">
          <Link href="#contact-u">Contact us now</Link>
        </button>
      </div>
      <div>
        <Image
          src="/images/brand.svg"
          alt=""
          width={523}
          height={497}
          className="w-[523px] h-[497.28px]"
        />
      </div>
    </div>
  );
};

export default Brand;
