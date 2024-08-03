"use client";
import React, { useState } from "react";
import Image from "next/image";
// import { PropagateLoader } from 'react-spinners';
import { toast } from "react-toastify";
import ContactOne from "./ContactOne";
import ContactDetails from "./ContactDetails";

const ContactUsPage = () => {
  return (
    <section
      id="contact-us"
      className="contact flex flex-col w-full min-h-[1171px] items-center justify-center lg:px-[119px] gap-[82px] px-4 xs:gap-8 pb-3"
    >
      <div className="flex gap-4 xs:gap-2 text-white xs:flex-col">
        <div className="flex gap-[37px] items-center lg:flex-row flex-col">
          <Image src="/icons/location2.svg" width={80} height={80} alt="logo" />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Our Location</h1>
            <p className="text-sm">
              M.peace plaza 3rd floor <br /> Block B F3 31 room
            </p>
          </div>
        </div>
        <div className="flex gap-[37px] items-center lg:flex-row flex-col">
          <Image src="/icons/telephone.svg" width={80} height={80} alt="logo" />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Phone Number</h1>
            <p className="text-sm">+250 788 846 668</p>
          </div>
        </div>
        <div className="flex gap-[37px] items-center lg:flex-row flex-col">
          <Image src="/icons/message.svg" width={80} height={80} alt="logo" />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Email Address</h1>
            <p className="text-sm">everdesigns@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col max-w-[1440px]">
        <ContactDetails />
        <ContactOne />
      </div>
    </section>
  );
};

export default ContactUsPage;
