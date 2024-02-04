import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default async function Contact() {
  return (
    <div className="my-10 py-10 p-4 flex flex-col gap-2 items-center">
      <h1 className="font-bold text-4xl">Contact</h1>
      <p className="text-slate-600">
        Feel free to reach out, contact me directly.
      </p>
      <div className="flex items-center text-sm text-gray-600 gap-2 mt-4">
        Contact me:{" "}
        <a
          href="https://www.instagram.com/its_vermajii"
          target="__blank"
          className="p-2 bg-slate-100 hover:bg-black rounded-md hover:text-white transition-colors"
        >
          <Instagram />
        </a>
        <a
          href="https://github.com/techisHeaven"
          target="__blank"
          className="p-2 bg-slate-100 hover:bg-black rounded-md hover:text-white transition-colors"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/himanshu-verma-2150b5252"
          target="__blank"
          className="p-2 bg-slate-100 hover:bg-black rounded-md hover:text-white transition-colors"
        >
          <Linkedin />
        </a>
        <a
          href="https://twitter.com/@itz_vermajii"
          target="__blank"
          className="p-2 bg-slate-100 hover:bg-black rounded-md hover:text-white transition-colors"
        >
          <Twitter />
        </a>
      </div>
    </div>
  );
}
