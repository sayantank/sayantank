const Skill = ({ data: { title, list } }) => {
  return (
    <div className="flex flex-col space-y-1 w-1/2">
      <h3>{title}</h3>
      <ul>
        {list.map((skill, i) => (
          <li
            key={i}
            className="mb-1 font-medium font-sans text-base lg:text-lg text-gray-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
