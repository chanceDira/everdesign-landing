import React from "react";
import Image from "next/image";
import Link from "next/link";

interface workProps {
  img: string;
  title: string;
  description: string;
  label: string;
  link: string;
  date: string;
  onShowModal: () => void;
}

const MyWorkCard: React.FC<workProps> = ({
  img,
  title,
  label,
  date,
  onShowModal,
}) => {
  return (
    <div className="relative flex flex-col gap-4 xs:w-full max-w-[343px] group">
      <div className="overflow-hidden rounded-md relative">
        <Image
          src={img}
          alt={title}
          width={388}
          height={492}
          className="rounded-md h-[400px] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
          onClick={onShowModal} // Trigger modal on image click
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-orange-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
          <button onClick={onShowModal}>
            <p className="text-white text-sm font-semibold">View Project</p>
          </button>
        </div>
      </div>
      <div className="w-full xs:w-full">
        <div className="flex justify-between items-center font-medium lg:pr-0 sm:pr-3">
          <h1 className="text-sm">{title}</h1>
          <button
            onClick={onShowModal} // Trigger modal on button click
            className="flex text-sm gap-[6px] border-b-[2px] pb-1 border-slate-400 text-secondary"
          >
            <span>{label}</span>
            <svg
              width="18"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.875 3.125L16.25 3.125C16.4158 3.125 16.5747 3.19085 16.6919 3.30806C16.8092 3.42527 16.875 3.58424 16.875 3.75V13.125C16.875 13.4702 16.5952 13.75 16.25 13.75C15.9048 13.75 15.625 13.4702 15.625 13.125V5.25888L4.19194 16.6919C3.94786 16.936 3.55214 16.936 3.30806 16.6919C3.06398 16.4479 3.06398 16.0521 3.30806 15.8081L14.7411 4.375L6.875 4.375C6.52982 4.375 6.25 4.09518 6.25 3.75C6.25 3.40482 6.52982 3.125 6.875 3.125Z"
                fill="#E46322"
              />
            </svg>
          </button>
        </div>
        <p className="text-sm text-[#797C86] lg:pr-0 sm:pr-3">{date}</p>
      </div>
    </div>
  );
};

export default MyWorkCard;
