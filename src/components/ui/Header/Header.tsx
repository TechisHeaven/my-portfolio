// "use client";
import { Moon, Send, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
// import { useEffect } from "react";

export default function Header() {
  // const { setTheme, theme, resolvedTheme } = useTheme();
  // useEffect(() => {
  //   console.log(theme);
  // }, [theme]);
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
      <div>
        {/* <div className="inline-flex items-center">
          <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
            <input
              id="switch-component"
              type="checkbox"
              className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-900 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
            />
            <label
              htmlFor="switch-component"
              className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
            >
              <Moon />
              <div
                className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>
        </div> */}
        <div className="relative overflow-hidden">
          <button className="flex shadow-sm hover:shadow-md group items-center p-2 px-4 gap-2 border rounded-md bg-black text-white  before:w-full before:absolute before:bg-yellow-500 before:left-0 before:h-10 before:-translate-y-full hover:before:translate-y-0 before:transition-all  before:opacity-0 before:hover:opacity-100 hover:text-black before:rounded-b-full before:hover:rounded-md before:duration-150">
            <Send
              className="w-4 group-hover:rotate-45 transition-all"
              key={"Talk-button"}
            />
            <p className="z-20">Let&apos;s Talk</p>
          </button>
        </div>
      </div>
    </header>
  );
}
