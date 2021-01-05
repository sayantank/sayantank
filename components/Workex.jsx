const Workex = ({ data: { title, role, points } }) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3>{title}</h3>
      <p className="font-semibold font-sans text-base lg:text-lg text-gray-800">
        {role}
      </p>
      <ul className="list-disc">
        {points.map((point, i) => (
          <li
            key={i}
            className="mb-2 font-medium font-sans text-sm lg:text-base text-gray-600"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workex;
