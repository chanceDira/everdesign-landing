"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/ui/SplashScreen";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);
  useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return <main className=" ">{isLoading ? <SplashScreen /> : <>
          <Navbar />
          {children}
          <Footer />
  </>}</main>;
}
