import Image from "next/image";
import me from "../../../public/Me.jpg";

const TestimonyCard = (props: any) => {
  return (
    <div className="px-8 py-12 flex flex-col gap-4 min-w-[320px] max-w-[320px] text-center rounded justify-center items-center shadow-md bg-gray-800 text-white-100 max-md:min-w-[280px]">
      <Image
        src={props.image}
        alt={props.author}
        className="w-[70px] rounded"
      ></Image>
      <p>{props.testimony}</p>
      <div>
        <p className="text-[16px] font-mediumtext-white">
          {props.author}
        </p>
        <p className="text-[12px] ">{props.authorOcupation}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="flex w-full px-[5%] text-[14px] py-24 items-center justify-center max-lg:py-16 text-white bg-[#111827]"
    >
      <div className="w-full flex flex-col gap-12">
        <div className="flex flex-col w-full gap-4 h-fit items-center justify-center">
        <button className="flex border-none rounded-2xl outline-none text-[12px] py-3 px-4 text-lg  text-[#86efac] leading-none hover:bg-white hover:text-black">
            Testimonies
          </button>
          <p>Nice things people have said about me:</p>
        </div>

        <div className="w-full flex justify-center gap-12 flex-wrap">
          <TestimonyCard
            image={me}
            author="David"
            authorOcupation="Founder of GreatThings"
            testimony="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend David and will rehire in the future for Frontend development.”"
          />

          <TestimonyCard
            image={me}
            author="David"
            authorOcupation="Founder of GreatThings"
            testimony="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend David and will rehire in the future for Frontend development.”"
          />

          <TestimonyCard
            image={me}
            author="David"
            authorOcupation="Founder of GreatThings"
            testimony="“Job well done! I am really impressed. He is very very good at what he does:) I would recommend David and will rehire in the future for Frontend development.”"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
