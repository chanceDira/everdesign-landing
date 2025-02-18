import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Link from 'next/link';
import { navLinks } from '@/constants/navLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=' bg-primary  w-full  flex flex-col items-center'>
      <div className='flex text-white max-w-[1440px]  lg:px-[100px] py-[119px] items-start justify-between border-b-2 border-gray-300 px-4 lg:flex-row flex-col gap-9'>
        <div className=' w-[80%] md:w-[35%] flex flex-col gap-6 text-sm xs:w-full'>
          <Image src='/icons/logo3.svg' alt='' width={118.5} height={52.5} />
          <h1 className='text-sm max-w-[315px]'>
            A leading cargo logistics company based in Rwanda,aims to enhance
            its online presence and streamline customer interactions through a
            website redesign project.
          </h1>
          <div className='flex gap-6 lg:flex-row'>
            <Image src='/icons/orangeFb.svg' alt='' width={40} height={40} />
            <Image src='/icons/google-icon.svg' alt='' width={40} height={40} />
            <Image
              src='/icons/linkedinIcon.svg'
              alt=''
              width={40}
              height={40}
            />
            <Image src='/icons/youtubeIcon.svg' alt='' width={40} height={40} />
          </div>
        </div>
        <div className='w-[20%] flex flex-col  lg:gap-[29px] text-[18px] xs:text-[14px]  font-normal xs:w-full gap-2'>
          <h1 className='text-secondary font-medium'>Our Services</h1>
          <div className='flex flex-col gap-4 xs:flex-row justify-around text-white text-sm font-normal'>
            <p className=''>Architectural Design</p>
            <p className=''>Construction and Project Management</p>
            <p className=''>Renovation and Remodeling</p>
            <p className=''>Urban planning and development</p>
          </div>
        </div>
        <div className=' flex flex-col lg:gap-[29px] gap-2 text-[18px] font-normal xs:w-full mb-0 '>
          <h1 className='text-secondary font-medium'>Useful links</h1>
          <div className='flex gap-[90px] l xs:text-[14px] xs:gap-0'>
            <div className='flex flex-col gap-4 xs:flex-row xs:justify-between'>
              {navLinks.map((route) => {
                return (
                  <Link
                    href={route.href}
                    key={route.label}
                    className='text-sm font-normal'
                  >
                    {route.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:gap-[29px] text-[18px] font-normal xs:w-full mb-0 border-green-400 gap-2'>
          <h1 className='text-secondary font-medium'>Contact Us</h1>
          <div className='flex gap-4 '>
            <Image src='/icons/email-icon.svg' alt='' width={19} height={12} />
            <h1 className='text-sm font-normal'>everdesigns@gmail.com</h1>
          </div>
          <div className='flex gap-4'>
            <Image src='/icons/location3.svg' alt='' width={19} height={12} />
            <h1 className='text-sm font-normal'>
              M.peace plaza 3rd floor Block B F3 31 room
            </h1>
          </div>
          <div className='flex gap-4'>
            <Image
              src='/icons/telephone-icon.svg'
              alt=''
              width={19}
              height={12}
            />
            <h1 className='text-sm font-normal'>+250 788 846 668</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center w-full lg:px-[100px]'>
      <h1 className='text-center text-white py-8 text-sm'>
        © Copyright 2024 <span className='text-secondary'>EverDesign</span>
      </h1>
      <Link href="https://www.codiblegroup.com" target='_blank' className='text-sm font-light text-gray-200'>Designed by Codible Group</Link>
      </div>
    </footer>
  );
};
export default Footer;
