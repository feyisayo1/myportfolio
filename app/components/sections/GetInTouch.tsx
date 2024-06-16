import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CallCalling, Message } from "iconsax-react";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="w-full px-[5%] flex py-16 items-center justify-center bg-[#030712]  text-white text-[14px]"
    >
      <div className="flex w-full items-center flex-col gap-8">
        <div className="flex flex-col gap-4 w-full max-w-[500px] text-center h-fit items-center justify-center">
        <button className="flex border-none rounded-2xl outline-none text-[12px] py-3 px-4 text-lg text-[#86efac] leading-none hover:bg-white hover:text-black">
            Get In Touch
          </button>
          <p>
            What is next? Feel free to reach out to me if you are looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-white text-[20px] font-medium max-md:text-[18px] max-sm:text-[16px]">
          <Link href="mailto:greatamaizu@gmail.com" className="flex gap-2">
            <Message />
            <p>ogunleyedavid34@gmail.com</p>
          </Link>

          <Link href="tel:07047739348" className="flex gap-2">
            <CallCalling />
            <p>+234 8121200853</p>
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-[12px] items-center">
          <p>You can connect with me on these platforms!</p>
          
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
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
