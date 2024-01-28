import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="my-20 px-2">
      <h1 className="font-bold text-2xl">Projects</h1>
      <div className="items m-4 grid grid-cols-2 grid-rows-2 gap-4">
        <div className="item w-full aspect-square bg-gray-200 rounded-md relative">
          <Link
            href="/project/1"
            className="bg-white rounded-full absolute block right-4 top-4 p-2 shadow-sm"
          >
            <MoveUpRight />
          </Link>
          project 1
        </div>
        <div className="item w-full aspect-square bg-gray-200 rounded-md relative">
          <Link
            href="/project/2"
            className="bg-white rounded-full absolute block right-4 top-4 p-2 shadow-sm"
          >
            <MoveUpRight />
          </Link>
          project 2
        </div>
        <div className="item w-full aspect-square bg-gray-200 rounded-md relative">
          <Link
            href="/project/3"
            className="bg-white rounded-full absolute block right-4 top-4 p-2 shadow-sm"
          >
            <MoveUpRight />
          </Link>
          project 3
        </div>
        <div className="item w-full aspect-square bg-gray-200 rounded-md relative">
          <Link
            href="/project/4"
            className="bg-white rounded-full absolute block right-4 top-4 p-2 shadow-sm"
          >
            <MoveUpRight />
          </Link>
          project 4
        </div>
      </div>
    </div>
  );
}
