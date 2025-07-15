

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
        <button className="font-serif cursor-pointer  bg-green-400 py-3 px-6 rounded-md shadow-md ">
          Get Started
        </button>
        <button className="font-serif  ml-11  py-3 px-6  cursor-pointer ">
          Learn More
        </button>
      </div>

      <hr className="h-[1px] w-6xl border-0  bg-gray-200 mt-20 ml-20"></hr>

      <div className="flex gap-5 mt-4 ml-6 ">
        <div>
          <span className="text-green-600 text-2xl font-bold justify-center ">
            57K+
          </span>
          <br />
          Customers
        </div>
        <div>
          <span className="text-green-600 text-2xl font-bold justify-center ">
            125+
          </span>
          <br /> Regions across
          <br /> AWS,Azure,and
          <br /> Google Cloud.
        </div>
        <div>
          <span className="text-green-600 text-2xl font-bold justify-center ">
            175K+
          </span>
          <br />
          Developers join
          <br /> every month
        </div>
        <div>
          <span className="text-green-600 text-2xl font-bold justify-center ">
            #1
          </span>
          <br />
          Most used
          <br />
          modern database
        </div>
      </div>
    </main>
  );
};

export default Hero;
