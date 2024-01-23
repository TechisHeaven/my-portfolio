import {
  ArrowRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mouse,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="hero-section flex gap-12 flex-row w-full justify-center my-20 px-10">
      <div className=" w-[400px] h-[500px] aspect-square overflow-hidden relative">
        <Image
          className="w-full object-top h-full object-cover rounded-full"
          alt="hero-image"
          width={500}
          height={500}
          src={"/hero-image.jpg"}
        ></Image>
      </div>
      <div className="relative flex-1 mt-20 flex items-start justify-center flex-col gap-4">
        <h1 className="font-bold  text-6xl before:absolute before:bg-yellow-400 text-black before:skew-x-12 before:-skew-y-3 before:w-72   before:h-16  before:-z-10">
          Himanshu
        </h1>
        <p className="font-medium">Full Stack Web Developer</p>
        <p className="text-gray-500 text-sm">
          Hi, I'm Himanshu and I am a FullStack MERN Developer. Trying to make
          awesome React and Nextjs Web apps
        </p>
        <div className="flex-0">
          <button className="relative inline-flex items-center justify-center p-2 px-4 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-black rounded-md shadow-md group ">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-y-full bg-black group-hover:translate-y-0 ease ">
              <Download className="w-4" />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
              Download CV
            </span>
            <span className="relative invisible">Download CV</span>
          </button>
        </div>
        <div className="flex items-center text-sm text-gray-600 gap-2 mt-8">
          Follow me:{" "}
          <a
            href="#instagram"
            className="p-2 hover:bg-black rounded-md hover:text-white transition-colors"
          >
            <Instagram />
          </a>
          <a
            href="#instagram"
            className="p-2 hover:bg-black rounded-md hover:text-white transition-colors"
          >
            <Github />
          </a>
          <a
            href="#instagram"
            className="p-2 hover:bg-black rounded-md hover:text-white transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="#instagram"
            className="p-2 hover:bg-black rounded-md hover:text-white transition-colors"
          >
            <Twitter />
          </a>
        </div>
      </div>
      <div className="scrollArrow absolute bottom-40">
        <Mouse />
      </div>
    </div>
  );
}
