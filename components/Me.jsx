import React from "react";
import Image from "next/image";

import { GitHub, Linkedin } from "react-feather";

const Me = () => {
  return (
    <div className="flex flex-col space-y-6 items-center">
      <div className="h-24 w-24 lg:w-32 lg:h-32 relative">
        <Image
          src="/images/dp.jpeg"
          alt="Sayantan Karmakar"
          layout="fill"
          className="rounded-full img-border"
        />
      </div>
      <div className="flex flex-col space-y-1 items-center">
        <h1 className="bold-white text-2xl">Sayantan Karmakar</h1>
        <h2 className="text-xl font- text-w-1">Fullstack Developer</h2>
        <div className="flex items-center space-x-6">
          <GitHub className="text-w-1 mt-2 cursor-pointer" />
          <Linkedin className="text-w-1 mt-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Me;
