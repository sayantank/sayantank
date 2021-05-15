import React from "react";

const Intro = () => {
  return (
    <div className="flex flex-col space-y-4 lg: space-y-6 items-center text-center">
      <p className="para">
        Hi, I’m just a friendly Fullstack Developer, currently based in
        Vadodara, India. My preferred stack includes{" "}
        <span className="bold-white">Typescript</span>,{" "}
        <span className="bold-white">React</span>,{" "}
        <span className="bold-white">Express</span>,{" "}
        <span className="bold-white">MongoDB/PostgreSQL</span>,{" "}
        <span className="bold-white">Vercel</span> and{" "}
        <span className="bold-white">AWS</span>, but I’m always open to learn
        and try new stuff! Also, I’m currently interning at{" "}
        <a href="">
          <span className="bold-white">Argonaut</span>
        </a>
        .
      </p>
      <p className="para">
        I’ve always been curious about all kinds of technology, currently
        obsessing over <span className="bold-white">DevOps</span>{" "}
        <span className="bold-white">Blockchain</span> and{" "}
        <span className="bold-white">Web3</span>. Sometimes, I like to fiddle
        around on <span className="bold-white">Figma</span>. Nothing pleases me
        more than a clean, aesthetic UI.
      </p>
      {/* <p className="para">
        Besides work, I spend my time binging{" "}
        <span className="font-medium text-red">Youtube</span>, and reading about
        tech. I love football, Chelsea, listening to music and some casual
        photography. Yes, I take my Instagram feed very seriously.
      </p> */}
    </div>
  );
};

export default Intro;
