import Image from "next/image";
import React from "react";

const ContactDetails = () => {
  return (
    <div className=" hidden md:block w-1/2 bg-primary text-secondary p-[40px] flex flex-col gap-14 rounded-l-[10px] xs:rounded-l-[0px] xs:rounded-t-[10px] items-center justify-center">
       <div className="flex flex-col gap-14 xs:gap-2 text-white xs:flex-col">
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
    </div>
  );
};

export default ContactDetails;
