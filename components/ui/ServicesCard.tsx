import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServicesCard: React.FC<ServiceProps> = ({
  img,
  title,
  description,
  link,
  count,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6 gap-3">
      <Image src={img} alt="" height={35} width={35} />
      <h1 className="text-base font-bold">{title}</h1>
      <p className=" text-center text-sm text-slate-800">
        {description}
      </p>
      <Link
        href={link}
        className=" hidden flex items-center font-bold text-black text-sm gap-1"
      >
        Read More
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M18.6502 12L4.25 12"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="square"
          />
          <path
            d="M13.2002 5.9754L19.2502 11.9994L13.2002 18.0244"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="square"
          />
        </svg>
      </Link>
      <p className="self-end text-3xl font-bold text-gray-300">{count + 1}</p>
    </div>
  );
};

export default ServicesCard;
