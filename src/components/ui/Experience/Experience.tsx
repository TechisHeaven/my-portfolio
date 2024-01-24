import Image from "next/image";
import Link from "next/link";

export default async function Experience() {
  return (
    <div className="my-20 ">
      <h1 className="font-bold text-2xl my-4"> Experience</h1>
      <div className="experience-items flex items-center flex-row gap-4">
        <a
          target="__blank"
          href={"https://www.littlemove.in/"}
          className="item p-4 px-8  flex items-center gap-2"
        >
          <div className="icon rounded-full w-10 h-10 aspect-square overflow-hidden border">
            <Image
              width={40}
              height={40}
              alt="company-image"
              src={"/littlemove.jpg"}
              draggable="false"
              className="grayscale saturate-0 select-none"
            />
          </div>
          <div>
            <h1 className="font-semibold">LittleMove</h1>
            <p className="text-sm text-gray-500">
              Web Developer . <span>2023-Present</span>
            </p>
          </div>
        </a>
        <a
          target="__blank"
          href={"https://www.aapniidukan.in"}
          className="item p-4 px-8  flex items-center gap-2"
        >
          <p className="icon  bg-gray-300 text-white flex items-center justify-center rounded-full w-10 h-10 aspect-square overflow-hidden border">
            A
          </p>
          <div>
            <h1 className="font-semibold">Aapniidukan</h1>
            <p className="text-sm text-gray-500">
              Wordpress Developer . <span>2022-2022</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
