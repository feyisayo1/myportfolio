import Work from "./components/sections/Work";
import Skills from "./components/sections/Skills";
import AboutMe from "./components/sections/AboutMe";
import GetInTouch from "./components/sections/GetInTouch";
import Experience from "./components/sections/Experience";
import HeroSection from "./components/sections/HeroSection";
import Testimonials from "./components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <GetInTouch />
    </main>
  );
}
