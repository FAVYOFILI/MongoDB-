

 const Hero = () => {
  return (
    <main className="flex flex-col justify-center font-serif bg-white h-[900px] ">
      <div className=" ml-11">
        <h1 className="text-7xl font-serif ">
          Loved by developers.
          <br /> Built for
          <button className=" cursor-pointer py-3 px-15 rounded-2xl text-7xl font-serif ml-5 border-1 border-gray-300 ">
            Geospatial Data
          </button>
        </h1>
        <div className="mt-11 text-xl   ">
          You don't need a separate database to handle transactions, rich
          search, or generative AI. The world's most <br /> popular modern
          database adapts and scales to handle all your application
          requirements.
        </div>
      </div>
      <div className="ml-11 mt-11">
        <button className="font-sans cursor-pointer  bg-green-400 py-3 px-6 rounded-md shadow-md ">
          Get Started
        </button>
        <button className="font-sans  ml-11  py-3 px-6  cursor-pointer ">
          Learn More
        </button>
      </div>

      <hr className="h-[1px] w-6xl border-0  bg-gray-200 mt-20 ml-20"></hr>

      <div className="flex-row justify-between mt-20">
        <div className="flex  ml-11 ">
          <h1 className="items-center">57k+ </h1> 
          <br />
          <p>
            Customers
          </p>
        </div>
        <div className=" ml-11">
          <h1>125+ </h1>
          <br />
          <p> Regions across AWS, Azure, and Google Cloud</p>
        </div>
        <div className="ml-11">
          <h1 className="justify-center  ">175+ </h1> <br />
          <p> Developers join every month</p>
        </div>
        <div className=" ml-11">
          <h1> #1 </h1> <br />
          <p> Most used modern database</p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
