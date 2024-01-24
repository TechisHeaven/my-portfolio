import MainSkill from "@/components/ui/MainSkill/MainSkill";
import HeroSection from "@/components/ui/HeroSection/HeroSection";
import Experience from "@/components/ui/Experience/Experience";
import Skills from "@/components/ui/Skills/Skills";
export default async function Home() {
  return (
    <main className="min-h-screen max-w-[1024px] m-auto selection:bg-yellow-400 selection:text-black">
      <HeroSection />
      <MainSkill />
      <Experience />
      <Skills />
      {/* <div className="pageScroller rotate-0 text-2xl fixed top-0">222</div> */}
    </main>
  );
}
