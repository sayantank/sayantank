import RegularLayout from "@/layouts/RegularLayout";
import Image from "next/image";

import EduData from "../data/education";
import SkillData from "../data/skills";
import WorkData from "../data/workex";
import ServiceData from "../data/services";
import ProjectData from "../data/projects";

import Edu from "@/components/Edu";
import Skill from "@/components/Skill";
import Workex from "@/components/Workex";
import Service from "@/components/Service";
import Project from "@/components/Project";

const Bold = ({ children }) => {
  return <span className="font-extrabold">{children}</span>;
};

export default function Home() {
  return (
    <RegularLayout>
      <div className="flex justify-center lg:justify-end space-x-5">
        <a
          href="https://www.github.com/sayantank"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8"
        >
          <Image
            src="/images/github.png"
            height={10}
            width={10}
            layout="responsive"
            alt="Github"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/sayantan-karmakar-2ba3b4184/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8"
        >
          <Image
            src="/images/linkedin.png"
            height={10}
            width={10}
            layout="responsive"
            alt="Linkedin"
          />
        </a>
      </div>
      <div className="flex flex-col space-y-8">
        <Image
          src="/images/dp.jpeg"
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
            I like to <Bold>code</Bold> and <Bold>design</Bold> beautiful
            digital products.
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <h1>My Resume</h1>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-8 lg:space-y-0">
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
          <div className="flex flex-col flex-1 space-y-5">
            <h2>Work Experience</h2>
            {WorkData.map((work, i) => (
              <Workex key={i} data={work} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <h1>What can I do for you?</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-3 lg:space-y-0 space-y-3">
          {ServiceData.map((service, i) => (
            <Service key={i} data={service} />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-12">
        <h1>What have I done?</h1>
        {ProjectData.map((project, i) => (
          <Project key={i} data={project} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center p-8">
        <p className="mb-2 text-3xl lg:text-5xl text-center text-black font-bold">
          Got a project?
        </p>
        <a
          href="mailto:sayantankarmakar@outlook.com"
          className="cursor-pointer no-underline hover:underline text-5xl lg:text-7xl text-center text-black font-black"
        >
          Let's Talk!
        </a>
      </div>
      <div className="p-10 flex flex-col items-center space-y-1 justify-center">
        <a
          href="mailto:sayantankarmakar@outlook.com"
          className="no-underline hover:underline text-sm lg:text-base text-black font-light"
        >
          sayantankarmakar@outlook.com
        </a>
        <p className="text-sm lg:text-base text-black font-light">
          Sayantan Karmakar, 2021.
        </p>
      </div>
    </RegularLayout>
  );
}
