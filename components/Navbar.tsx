import Image from "next/image";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    setIsClicked(!isClicked);
  };
  const handleLinkClick = () => {
    setIsClicked(false);
  };
  const pathname = usePathname();

  return (
    <section
      className={`${
        scrolled ? "drop-shadow" : ""
      } w-screen sm:h-[80px] flex lg:px-[119px] items-center justify-between fixed bg-white z-50 px-6 xs:h-[90px]`}
    >
      <Link href="/" onClick={handleLinkClick}>
        <Image src="/icons/logo.svg" alt="" width={118.5} height={52}  className=""/>
      </Link>
      <div className="flex sm:gap-4 text-sm items-center xs:hidden  gap-5">
        {navLinks.map((item) => {
          const activeLink =
            pathname === item.href || pathname.startsWith(item.href);
          return (
            <Link
              href={item.href}
              key={item.label}
              className={clsx(`group hover:text-primary-2 `, {
                "text-primary-2": activeLink,
              })}
            >
              {item.label}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-2"></span>
            </Link>
          );
        })}
        <div className="ml-9 flex gap-3">
        <button className="bg-slate-800 py-2 px-6 text-white rounded-[12px] hover:opacity-60 text-sm font-semibold">
          <Link href="https://www.everdesigngroup.rw">Real Estate</Link>
        </button>
        <button className="bg-primary py-2 px-6 text-white rounded-xl hover:opacity-60 text-sm font-semibold">
          <Link href="#contact-u">Contact</Link>
        </button>
        </div>
      </div>
      <div className="flex items-center flex-row-reverse sm:hidden">
        <button
          className="inline-flex items-center justify-center p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-inset"
          onClick={handleToggle}
        >
          {isClicked ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        {isClicked && (
          <div className="absolute z-20 flex flex-col sm:hidden px-10 py-10 bg-white right-0 top-[57px] rounded-l-lg w-full items-center">
            {navLinks.map((item) => {
              const activeLink =
                pathname === item.href || pathname.startsWith(item.href);
              if (item.href === "#contact-us" && pathname !== "/") {
                return null;
              }
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  onClick={handleLinkClick}
                  className={clsx(
                    `group hover:text-primary-2 text-[22px] font-bold`,
                    {
                      "text-primary-2": activeLink,
                    }
                  )}
                >
                  {item.label}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary-2"></span>
                </Link>
              );
            })}
            <button className="bg-primary-2 text-primary-1 w-[189px] h-[60px] rounded-[12px] hover:opacity-60">
              <Link href="/get-quote">Get A Quote</Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
