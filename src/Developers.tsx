import CodeWindows from "./assets/Code Windows.svg"


const Developers = () => {
    return (
      <main className="bg-cyan-950 h-[400px] flex-col flex justify-between items-center ">
        <div className="h-[400px] w-[90%] rounded-2xl flex justify-between items-center">
          <div className="">
            <img src={CodeWindows} className="h-[400px] w-[700px] mt-24 " />
          </div>
          <div className=" w-[500px] flex flex-col items-center font-serif mt-24 text-white ">
            <h1 className="text-3xl font-serif mb-9 font-bold">
              {" "}
              Built by developers, for developers
            </h1>
            <p className="text-[20px] text-white font-bold">
              The document data model maps to how you think and <br />
              code. Break out of rigid, tabular data structures with <br />
              flexible documents that map directly to objects in
              <br /> your code. Embed related data into a single
              <br /> document to increase performance and minimize <br />
              computational cost.
            </p>
            <button className="font-serif">Learn the MongoDB Basics</button>
          </div>
        </div>
      </main>
    );
}

export default Developers