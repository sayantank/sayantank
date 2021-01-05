import RegularLayout from "@/layouts/RegularLayout";
import Image from "next/image";

import EduData from "../data/education";
import SkillData from "../data/skills";
import Edu from "@/components/Edu";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <RegularLayout>
      <div className="flex justify-center lg:justify-end">
        <a
          href="#"
          className="text-s lg:text-lg font-bold no-underline hover:underline"
        >
          sayantankarmakar@outlook.com
        </a>
      </div>
      <div className="flex flex-col space-y-8">
        <Image
          src="/dp.jpeg"
          alt="Sayantan Karmakar"
          height={120}
          width={120}
          layout="fixed"
          className="rounded-full"
        />
        <div className="flex flex-col space-y-1">
          <h1>Hi, I'm Sayantan 👋</h1>
          <p className="text-lg text-gray-800 font-medium">
            A Computer Science undergrad from India.
          </p>
          <p className="text-lg text-gray-800 font-medium">
            I like to <span className="font-extrabold">code</span> and{" "}
            <span className="font-extrabold">design</span> beautiful digital
            products.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <h1>My Resume</h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-2 lg:space-y-0">
          <div className="flex flex-col flex-1 space-y-8">
            <div className="flex flex-col space-y-5">
              <h2>Education</h2>
              {EduData.map((edu, i) => (
                <Edu key={i} data={edu} />
              ))}
            </div>
            <div className="flex flex-col space-y-5">
              <h2>Skills</h2>
              <div className="grid grid-cols-2 gap-y-6">
                {SkillData.map((skill, i) => (
                  <Skill key={i} data={skill} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <h2>Work Experience</h2>
          </div>
        </div>
      </div>
    </RegularLayout>
  );
}
