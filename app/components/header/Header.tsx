"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeChangeButton from "./ThemeChangeButton";
import { HambergerMenu, CloseSquare } from "iconsax-react";


const Header = () => {
  let [headerActive, setheaderActive] = useState(false);
  let [navbar, setNavBar] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let header = document.getElementsByTagName("header")[0];
    navbar = header;
    setNavBar(navbar);
  }, []);

  //functions
  const toggleHeader = () => {
    if(navbar)
    if(navbar.classList.contains("right-full")){
      navbar.classList.remove("right-full")
      navbar.classList.add("right-0")
    }else{
      navbar.classList.remove("right-0")
      navbar.classList.add("right-full")
    }
    if (headerActive) {
      setheaderActive(false);
    } else {
      setheaderActive(true);
    }
  };


  //components
  const ShowNavBar = () => {
    return (
      <button onClick={toggleHeader}>
        <HambergerMenu />
      </button>
    );
  };

  const HideNavBar = () => {
    return (
      <button onClick={toggleHeader} className="hidden max-md:flex">
        <CloseSquare />
      </button>
    );
  };

const ResponsiveHeader = () => {

  return (
    <main className="hidden z-10 fixed justify-between text-gray-600 px-[5%] py-4 w-full dark:text-gray-100 bg-[#111827] max-md:flex max-lg:top-[-20]">
      <h1 className="font-semibold text-[20px] max-md:text-[18px] max-sm:text-[16px] border-b-[3px] border-black">
        <p>O<span className="text-green-300">G</span></p>
      </h1>
      <ShowNavBar />
    </main>
  );
};  


  return (
    <>
    <header className="flex z-20 text-gray-600 px-[5%] py-4 w-full top-0 right-full max-md:py-0 max-md:px-0 max-md:pl-[5%] max-md:flex-col max-md:h-screen bg-gray-900 max-sm:pl-[10%] max-md:fixed sticky">
      <div className="flex w-full h-full justify-between max-md:flex-col max-md:justify-start">
        <div className="flex items-center justify-between max-md:border-b max-md:p-4 max-md:dark:border-gray-700">
          <h1 className="font-semibold text-[20px] max-md:text-[18px] max-sm:text-[16px]  border-b-[3px] border-black">
            <p className="text-green-300">OG</p>
          </h1>
        {headerActive && <HideNavBar />}
        </div>

        <nav className="flex text-[13px] gap-5 items-center max-md:text-[12px] max-md:gap-0 max-md:flex-col max-md:items-start">
          <div className="flex w-full h-fit gap-5 max-md:gap-4 max-md:flex-col max-md:border-b max-md:p-4 max-md:dark:border-gray-700 [&>*]:text-green-300 [&>*]:">
            <Link href="#about" onClick={toggleHeader} className="hover:text-white">About</Link>
            <Link href="#work" onClick={toggleHeader} className="hover:text-white">Work</Link>
            <Link href="#Testimonials" onClick={toggleHeader} className="hover:text-white">Testimonials</Link>
            <Link href="#contact" onClick={toggleHeader} className="hover:text-white">Contact</Link>
          </div>

          {/* <hr className="w-[1px] /h-full bg-gray-100 bord/er-none max-md:hidden" /> */}

          {/* <div className="flex gap-4 items-center max-md:flex-col max-md:w-full max-md:p-4 ">
            
            <button className="py-3 px-4 rounded-[8px] whitespace-nowrap border-none self-center bg-[#030712] text-green-300 outline-none leading-none  max-md:w-[400px] max-sm:w-full">
              Download CV
            </button>
          </div> */}
        </nav>
      </div>
    </header>

    <ResponsiveHeader />
    </>
  );
};

export default Header;
