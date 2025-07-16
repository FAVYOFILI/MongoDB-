import Transform from "./assets/Transform.png"
import Playground from "./assets/Playground.png"
import Skills from "./assets/Skills.png"

const MongoAI = () => {
  return (
    <main className="bg-cyan-950 h-[800px] flex-col flex justify-between items-center ">
      <div className="h-[200px] w-[100%] bg-cyan-800 justify-between  rounded-4xl  items-center mt-13">
        {" "}
      </div>

      <div className=" flex justify-between items-center">
        <div className=" w-[300px] h-[500px]   flex justify-center items-center rounded-4xl flex-col mr-7">
          {/* {MongoAI Level Up} */}
          <div>
            <h1 className="font-serif font-bold text-2xl flex ">
              <span className="text-green-600 text-3xl font-serif">
                {" "}
                Unlock the power of <br />
                AI
              </span>{" "}
              with MongoDB
            </h1>
            <p className="font-serif font-bold text-2xl flex">
              Discover how to leverage MongoDB <br />
              to streamline development for the <br /> next generation of
              AI-powered <br /> applications.
            </p>
          </div>
        </div>

        {/* {MongoAI 1} */}
        <div className="h-[500px] w-[300px] bg-white flex justify-center items-center rounded-4xl flex-col mr-7">
          <img
            src={Transform}
            className="h-[180px] bg-blue-50 w-[280px] rounded-4xl  "
          />
          <div className="h-[270px] w-[280px] bg-white rounded-4xl flex justify-center items-center mt-6 flex-col">
            <h1 className="font-serif font-bold text-[20px] mb-8 mr-7">
              Transform Without <br />
              Fear, Modernize <br />
              Without Freedom
            </h1>
            <p className="mb-9 font-serif">
              {" "}
              Use AI to turn complex
              <br /> outdated systems into scalable
              <br /> modern services up to 10x faster
            </p>
            <button className="font-serif font-semibold ">Learn More</button>
          </div>
        </div>

        {/* {MongoAI 2} */}
        <div className="h-[500px] w-[300px] bg-white flex justify-center items-center rounded-4xl flex-col mr-7">
          <img
            src={Playground}
            className="h-[180px] bg-blue-50 w-[280px] rounded-4xl  "
          />
          <div className="h-[270px] w-[280px] bg-white rounded-4xl flex justify-center items-center mt-6 flex-col">
            {" "}
            <h1 className="font-serif font-bold text-[20px] mb-8 mr-7 ">
              Try the Atlas Search
              <br /> Playground Free
            </h1>
            <p className="mb-5 font-serif">
              Explore how text search, RAG,
              <br /> and vector search work together <br />
              in MongoDB by building <br />
              interactive demos.
            </p>
            <button className="font-serif font-semibold ">
              Try the Chatbot Demo <br />
              Builder
            </button>
          </div>
        </div>

        {/* {MongoAI 3} */}

        <div className="h-[500px] w-[300px] bg-white flex justify-center items-center rounded-4xl flex-col mr-7">
          <img
            src={Skills}
            className="h-[180px] bg-blue-50 w-[280px] rounded-4xl  "
          />
          <div className="h-[270px] w-[280px] bg-white rounded-4xl flex justify-center items-center mt-6 flex-col">
            {" "}
            <h1 className="font-serif font-bold text-[20px] mb-8 mr-15">
              {" "}
              MongoDB Skils
              <br /> Badges
            </h1>
            <p className="mb-5 font-serif">
              {" "}
              Level up your MongoDB skills
              <br /> with our free, focused <br />
              credentials designes to help you <br />
              quickly learn and expand your <br />
              MongoDB knowledge
            </p>
            <button className="font-serif font-semibold ">
              Start learning today
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MongoAI
