const Service = ({ data: { emoji, title, desc } }) => {
  return (
    <div className="h-full flex-1 border-2 border-gray-200 rounded-md p-6 mb-6 flex flex-col space-y-4">
      <h1>{emoji}</h1>
      <h2>{title}</h2>
      <p className="font-medium font-sans text-base lg:text-lg text-gray-600">
        {desc}
      </p>
    </div>
  );
};

export default Service;
