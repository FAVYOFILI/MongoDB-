import CodeWindows from "./assets/Code Windows.svg"


const Developers = () => {
    return (
      <main className="bg-cyan-950 h-[400px] flex-col flex justify-between items-center ">
        <div className="h-[400px] w-[90%] rounded-2xl mt-9">
          <div className="">
            <img src={CodeWindows} className="h-[400px] w-[45%]  " />
          </div>
          <div className=" w-[45%] flex flex-col items-center font-serif ">
            <span> Built by developers, for developers</span>
            <p>
              The document data model maps to how you think and code. Break out
              of rigid, tabular data structures with flexible documents that map
              directly to objects in your code. Embed related data into a single
              document to increase performance and minimize computational cost.
            </p>
          </div>
          <button className="font-serif">Learn the MongoDB Basics</button>
        </div>
      </main>
    );
}

export default Developers