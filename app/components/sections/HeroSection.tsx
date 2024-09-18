import Link from "next/link";
import { Location } from "iconsax-react";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
  return (
    <section className="w-full h-[100vh] px-[5%] flex min-h-[500px] items-center bg-[#030712] max-lg:py-16 max-md:pt-100">
      <div className="w-full flex gap-12 justify-around max-lg:flex-wrap-reverse max-lg:justify-center">
        <section className="flex flex-col gap-6 text-gray-100 text-[14px] max-lg:gap-8 max-sm:gap-6">
          <div className="flex flex-col gap-4 max-w-[600px] max-lg:max-w-full">
            <h1 className="text-[40px] font-bold leading-none text-white max-lg:text-[35px] max-md:text-[30px]">
              Hi, I Am David 👋
            </h1>
            <p>
            I am a passionate about crafting visually stunning digital experiences that delight users and exceed expectations.
              With meticulous attention to detail and pixel-perfect precision, I bring designs to life through clean, efficient, and maintainable code.
              My expertise in ReactJs enables me to develop responsive, intuitive, and highly functional interfaces that seamlessly integrate with backend systems.
            </p>
            {/* <p>
              I am a front-end developer (React.js) Aspiring full stack dev, i focus on
              creating exceptional digital websites with lovely animation , accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
               2 years + now, I still love it as if it was something new.
            </p> */}
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <Location />
              <p className="leading-none">Lagos, Nigeria</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="flex w-[24px] items-center justify-center">
                <div className="bg-green-300 size-2 rounded-full"></div>
              </div>
              <p>Available for new projects</p>
            </div>
          </div>

          <div className="flex gap-1 items-center">
            <Link href="https://github.com/feyisayo1" className="flex p-[6px] " target="_blank">
              <LuGithub className="size-[25px] text-green-300 hover:text-white"/>
            </Link>
            <Link href="https://x.com/_ichbindavid" className="flex p-[6px]" target="_blank">
              <FaXTwitter className="size-[25px] text-green-300 hover:text-white"/>
            </Link>
            <Link href="https://www.linkedin.com/in/ogunleye-david-8a9b22194/" className="flex p-[6px]" target="_blank">
              <CiLinkedin className="size-[30px] text-green-300 hover:text-white"/>
            </Link>
          </div>
          <Link href="/CV.pdf"  className="py-3 px-4 w-fit rounded-[8px] whitespace-nowrap border-none bg-[#86efac] text-black outline-none leading-none hover:bg-white hover:text-black" target="_blank">
            Download CV
          </Link>
        </section>

        <section>
          {/* <div className="flex h-[320px] w-[280px] justify-center relative max-lg:w-[320px] max-lg:items-center max-sm:h-[280px] max-sm:w-[260px] "> */}
            <div className="picture1 h-[320px] rounded-2xl w-[280px] border-[8px] br max-lg:relative max-lg:bottom-[20px] max-sm:h-[280px] max-sm:w-[240px] max-sm:border-[5px] max-sm:bottom-[10px] max-md:mt-[12rem] max-sm:mt-[20rem]"> 
          
            </div>
          {/* </div> */}
        </section>
      </div>
    </section>
  );
};

export default HeroSection;



