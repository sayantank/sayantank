import Image from "next/image";

const Project = ({ data: { img, title, desc, link, source } }) => {
  return (
    <div className="flex flex-col space-y-5">
      <Image
        src={img}
        height={400}
        width={800}
        layout="responsive"
        alt={title}
      />
      <p className="font-sans text-2xl lg:text-3xl text-black font-black">
        {title}
      </p>
      {desc.map((point, i) => (
        <p
          key={i}
          className="font-medium font-sans text-base lg:text-lg text-gray-600"
        >
          {point}
        </p>
      ))}
      <div className="flex flex-wrap space-x-8">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold text-black text-base lg:text-lg"
        >
          Visit
        </a>
        {source !== "" && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold text-black text-base lg:text-lg"
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
