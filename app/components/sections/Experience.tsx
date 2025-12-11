import Image from "next/image"
import Logo from "../../../public/Swiftallylogo.svg"

const Experience = () => {
  return (
    <main className="flex w-full px-[5%] text-[14px] py-24 items-center justify-center max-lg:py-16 text-white bg-[#111827]">
      <div className="w-full flex flex-col gap-12">
        <div className="flex flex-col w-full gap-4 h-fit items-center justify-center text-center">
          <button className="flex border-none rounded-2xl outline-none text-[12px] py-3 px-4 text-lg  text-[#86efac] leading-none hover:bg-white hover:text-black">
            Experience
          </button>
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>

        
        <div className="w-full flex flex-col items-center gap-12 flex-wrap">
            <div className="flex w-[90%] p-9 gap-12 justify-between rounded shadow-md bg-gray-800 text-white max-lg:flex-col max-lg:gap-6 max-lg:w-full items-center">
              <div>
                <Image src={"https://kjk.africa/admin/public/logo/1597391459.png"} alt="Swiftally Logo" width={180} height={120} className="w-[180px] object-contain" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] text-white">Frontend Developer</h3>
                <ul className="list-disc pl-5">
                  <li>Used Next.js for the frontend</li>
                  <li>Used Tailwind CSS for the styling</li>
                </ul>
              </div>

              <p>2021</p>
            </div>
        </div>
        
      </div>
    </main>
  );
};

export default Experience;
