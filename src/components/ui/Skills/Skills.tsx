import Image from "next/image";

export default async function Skills() {
  const skillsData = [
    {
      title: "Javascript",
      img: "/javascript.webp",
    },
    {
      title: "TypeScript",
      img: "/typescript.svg",
    },
    {
      title: "React Js",
      img: "/react.png",
    },
    {
      title: "Nextjs",
      img: "/nextjs.png",
    },
    {
      title: "Linux",
      img: "/tux.svg.png",
    },
    {
      title: "nodejs",
      img: "/nodejs.png",
    },
  ];
  return (
    <div className="my-20 px-4">
      <h1 className="font-bold text-2xl">Skills</h1>
      <div className="skills flex items-center flex-row gap-4 justify-between p-4">
        {skillsData.map((sk, index) => {
          return (
            <div key={index} className="skill">
              <Image alt="skill-image" width={80} height={80} src={sk.img} />
              <h1>{sk.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
