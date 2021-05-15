const { default: Navbar } = require("../Navbar");

const RegularLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center space-y-10 lg:space-y-16">
      <main className="flex flex-col space-y-10 lg:space-y-16 px-8 lg:px-0 mt-8 lg:mt-16 w-screen lg:w-108 h-screen">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default RegularLayout;
