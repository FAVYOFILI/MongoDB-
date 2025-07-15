import Toyota from "./assets/Toyota.png";

const Automobiles = () => {
  return (
    <>
      <div className="w-100% h-90 bg-white ml-[90px] font-serif">
        <div className="w-100% h-80 bg-white flex justify-between">
          <div>
            <img className="w-50 h-20 ml-7" src={Toyota} />
            <p className="font-bold text-green-600 text-4xl ml-7 mt-10 font-serif">
              99.99%
            </p>
            <p className="ml-9 mt-3 font-serif">
              Availability for
              <br /> customers
            </p>
            <p className="font-bold text-green-600 text-4xl ml-7 mt-10 font-serif">
              9M+
            </p>
            <p className="ml-7 mt-3 font-serif">Vechiles serviced</p>
          </div>
          <div className="w-200 h-60 bg-white font-serif">
            <p className="text-cyan-950 text-[12px] font-serif mb-7">
              AUTOMOTIVE
            </p>
            <p className="text-3xl leading-12 font-serif">
              “We use MongoDB as the core database for our services, so any new
              innovative idea or new service we build, we automatically say,
              We're going to use MongoDB as the core platform, knowing that it's
              going to give us the reliability and the scalability that we're
              going to need.”
            </p>
            <div className="flex items-center gap-10 font-serif ">
              <button className="py-3 px-6 mt-4 bg-cyan-900 text-white font-medium rounded-md shadow-md hover:rounded-4xl cursor-pointer font-serif">
                Read case study
              </button>
              <p className="text-xl font-serif">MongoDB for Automotive</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Automobiles;
