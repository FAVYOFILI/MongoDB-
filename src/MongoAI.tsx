import Transform from "./assets/Transform.png"
import Playground from "./assets/Playground.png"
import Skills from "./assets/Skills.png"

const MongoAI = () => {
  return (
    <main className="bg-blue-950 h-[1000px] flex-col flex justify-center items-center ">
      <div className="h-[200px] w-[90%] bg-blue-600 flex justify-center items-center mr-6 mb-[100px] rounded-4xl"></div>

      {/* {MongoAI Cards} */}

      <div className=" w-[350px ]">
        {/* {MongoAI Level Up} */}
        <div>
          <span className="text-green-600 flex text-2xl">Level Up Your</span>{" "}
          MongoDB Skills Enhance your MongoDB knowledge with our free, focused
          Skill Badge credentials designed to help you quickly learn and
          validate specific skills.
        </div>
      </div>

      <div className=" flex justify-between">
        {/* {MongoAI 1} */}
        <div className="h-[500px] w-[300px] bg-amber-600 flex justify-center items-center rounded-4xl  ">
          <img
            src={Transform}
            className="h-[250px] bg-white w-[280px] rounded-4xl mb-[200px]  "
          />
          {/* <div className="h-[250px] w-[315px] bg-white mb-[40px]"></div> */}
        </div>

        {/* {MongoAI 2} */}
        <div className="h-[500px] w-[300px] bg-amber-600 flex justify-center items-center rounded-4xl ">
          <img
            src={Playground}
            className="h-[250px] bg-white w-[280px] rounded-4xl mb-[200px]  "
          />
          {/* <div className="h-[250px] w-[315px] bg-white mb-[40px]"></div> */}
        </div>

        {/* {MongoAI 3} */}
        <div className="h-[500px] w-[300px] bg-amber-600 flex justify-center items-center rounded-4xl flex-wrap">
          <img
            src={Skills}
            className="h-[250px] bg-white w-[280px] rounded-4xl mb-[200px]  "
          />
          {/* <div className="h-[250px] w-[315px] bg-white mb-[40px]"></div> */}
        </div>
      </div>
    </main>
  );
};
export default MongoAI
