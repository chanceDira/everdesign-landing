import Image from "next/image";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="bg-white text-secondary p-[40px] flex flex-col gap-14 rounded-l-[10px] xs:rounded-l-[0px] xs:rounded-t-[10px] items-center justify-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">
          Have a Project in Mind? Contact with Us
        </h1>
        <p className="text-[14px] leading-[26px] font-normal text-black">
          Personal Tax Planning: Our tax consultants work closely with
          individuals to develop comprehensive tax plans tailored to their
          unique financial situations.
        </p>
      </div>
    </div>
  );
};

export default ContactDetails;
