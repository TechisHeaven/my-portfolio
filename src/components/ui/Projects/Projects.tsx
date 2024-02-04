import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="my-20 px-2">
      <h1 className="font-bold text-2xl">Projects</h1>
      <div className="items m-4 grid grid-cols-2 grid-rows-2 gap-4">
        <div className="item w-full aspect-square flex items-center justify-center text-xl bg-gray-200 rounded-md relative">
          <a
            target="__blank"
            href="https://github.com/techisHeaven"
            className="bg-white rounded-full absolute block right-4 top-4 p-2 shadow-sm"
          >
            <MoveUpRight />
          </a>
          Coming Soon... 😊
        </div>
        <div className="item w-full aspect-square flex items-center justify-center text-xl bg-gray-200 rounded-md relative">
          <a
            target="__blank"
            href="https://github.com/techisHeaven"
            className="bg-white rounded-full absolute block right-4 top-4 p-2 shadow-sm"
          >
            <MoveUpRight />
          </a>
          Coming Soon... 😊
        </div>
        <div className="item w-full aspect-square flex items-center justify-center text-xl bg-gray-200 rounded-md relative">
          <a
            target="__blank"
            href="https://github.com/techisHeaven"
            className="bg-white rounded-full absolute block right-4 top-4 p-2 shadow-sm"
          >
            <MoveUpRight />
          </a>
          Coming Soon... 😊
        </div>
        <div className="item w-full aspect-square flex items-center justify-center text-xl bg-gray-200 rounded-md relative">
          <a
            target="__blank"
            href="https://github.com/techisHeaven"
            className="bg-white rounded-full absolute block right-4 top-4 p-2 shadow-sm"
          >
            <MoveUpRight />
          </a>
          <button className="bg-black text-white p-2 px-4 rounded-md">
            GitHub Repositories
          </button>
        </div>
      </div>
    </div>
  );
}
