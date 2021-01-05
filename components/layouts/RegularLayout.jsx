const RegularLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center space-y-10 lg:space-y-16">
      <div className="bg-gradient-to-r from-blue-500 to-pink-400 w-screen h-4" />
      <main className="flex flex-col space-y-10 lg:space-y-16 px-8 lg:px-0 w-screen lg:w-108 h-screen">
        {children}
      </main>
    </div>
  );
};

export default RegularLayout;
