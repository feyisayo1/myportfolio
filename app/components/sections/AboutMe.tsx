import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";


const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex w-full px-[5%] bg-[#111827] py-14 items-center justify-center max-lg:py-16"
    >
      <div className="w-full flex flex-col gap-8">
        <div className="flex w-full h-fit items-center justify-center">
          <button className="flex border-none rounded-2xl outline-none text-[12px] py-3 px-4 text-lg  text-[#86efac] leading-none hover:bg-white hover:text-black">
            About Me
          </button>
        </div>

        <div className="flex gap-20 justify-around items-start max-lg:flex-wrap max-lg:justify-center">
          <section>
            {/* <div className="flex h-[320px] w-[280px] bg-gray-200 justify-center relative dark:bg-gray-600 max-lg:w-[320px] max-lg:items-center max-sm:h-[280px] max-sm:w-[260px] "> */}
              <div className="picture2 rounded-2xl h-[320px] w-[280px] border-[8px] max-lg:relative max-lg:bottom-[20px] max-sm:h-[280px] max-sm:w-[240px] max-sm:border-[5px] max-sm:bottom-[10px]"></div>
            {/* </div> */}
          </section>

          <section className="flex flex-col gap-12 text-white text-[14px] max-lg:gap-8 max-sm:gap-6">
            <div className="flex flex-col gap-4 max-w-[600px] max-lg:max-w-full">
              <h1 className="text-[30px] font-bold leading-none text-white max-lg:text-[25px] max-sm:text-[22px]">
                Curious about me? Here you have it:
              </h1>

              <p>
                I am a web developer who is Exceptional in
                front end development [...React.js]. I am very
                eagar about creating interactive animation and bringing the  visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>

              <p>
                I began my journey as a web developer in 2022, joined an Online teaching school{" "}
              <Link
                href="https://altschoolafrica.com"
                className="text-[15px] text-green-300 hover:text-white"
              >
                <span className="inline-flex items-center underline">AltSchoolAfrica <TbExternalLink className="size-[15px]"/></span>
              </Link>{" "} in 2023  gradurated 2024 and since then, I
                have continued to grow and evolve as a developer,
                 I love building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript,
                Tailwindcss, firebase and much more.
              </p>

              <p>
                i am someone who thrives on competition and constantly seeks to improve myself, always striving to 
                become a better version of who i am. for me its is not just about winning but about pushing my own limits, aiming to outdo my previous accomplishments
                
              </p>

              <p>
                One last thing, I am available for freelance work, so feel free
                to reach out and say hello! I promise I dont bite 😉
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
