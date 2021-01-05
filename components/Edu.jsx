const Edu = ({ data: { title, course, year } }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h3>{title}</h3>
      <p className="font-medium font-sans text-base lg:text-lg text-gray-800">
        {course}
      </p>
      <p className="font-normal font-sans text-sm lg:text-base text-gray-500">
        {year}
      </p>
    </div>
  );
};

export default Edu;
