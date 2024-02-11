import { Layers, Layers2, Layers3, MoveUpRight } from "lucide-react";

export default async function MainSkill() {
  return (
    <div className="py-20 my-20 mt-40">
      <div className="text-center mainSkillheading px-10">
        <h1 className="text-4xl font-bold py-2">What can I Do For Your Need</h1>
        <p className="py-2 text-sm text-gray-500">
          I am a FullStack Web developer works with React Js , Next Js , MERN
          Stack and Typescript.
        </p>
      </div>
      <div className="skills mx-10 sm:flex-col flex-col md:flex-row flex items-center gap-4 justify-center my-10">
        <div className="skill w-full shadow hover:shadow-md transition-all p-8 flex items-center gap-2 flex-col rounded-md px-12 border relative select-none">
          <Layers3 />
          <h1>FullStack Web Developer</h1>
          <div className="p-2 bg-black text-white rounded-full inline-block absolute right-4 top-4">
            <MoveUpRight className="w-5 h-5" />
          </div>
        </div>
        <div className="skill w-full shadow hover:shadow-md transition-all p-8 flex items-center gap-2 flex-col rounded-md px-12 border relative select-none">
          <Layers2 />
          <h1>Frontend Developer</h1>
          <div className="p-2 bg-black text-white rounded-full inline-block absolute right-4 top-4">
            <MoveUpRight className="w-5 h-5" />
          </div>
        </div>
        <div className="skill w-full shadow hover:shadow-md transition-all p-8 flex items-center gap-2 flex-col rounded-md px-12 border relative select-none">
          <Layers />
          <h1>Backend Developer</h1>
          <div className="p-2 bg-black text-white rounded-full inline-block absolute right-4 top-4">
            <MoveUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
