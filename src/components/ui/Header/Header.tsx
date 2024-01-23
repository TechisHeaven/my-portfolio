import { Send } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-2 px-4 flex justify-between items-center">
      <div className="flex items-center flex-row gap-2">
        <Link
          href={"/"}
          className="p-2 rounded-full bg-black w-10 text-center text-white"
        >
          H
        </Link>
        <p className="font-semibold text-lg">Himanshu.</p>
      </div>
      <div className="items">
        <ul className="flex gap-4 items-center">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/work"}>Work</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="relative overflow-hidden">
        <button className="flex shadow-sm hover:shadow-md group items-center p-2 px-4 gap-2 border rounded-md bg-black text-white  before:w-full before:absolute before:bg-yellow-500 before:left-0 before:h-10 before:-translate-y-full hover:before:translate-y-0 before:transition-all  before:opacity-0 before:hover:opacity-100 hover:text-black before:rounded-b-full before:hover:rounded-md before:duration-150">
          <Send
            className="w-4 group-hover:rotate-45 transition-all"
            key={"Talk-button"}
          />
          <p className="z-20">Let's Talk</p>
        </button>
      </div>
    </header>
  );
}
