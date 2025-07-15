import Victoria from "./assets/Victoria.png"
import Toyota from "./assets/Toyota.png"
import LG from "./assets/LG.svg"
import Novo_Nordisk from "./assets/Novo_Nordisk.svg"


const Loved = () => {
  return (
    <>
      <div className="w-100% h-90 ">
        <h1 className="font-bold text-2xl ml-[90px] mt-[20px] font-serif">
          Loved by developers, trusted by <br />
          enterprises
        </h1>
        <div className="w-[90%] h-50 flex justify-between items-center ml-15">
          <div className="flex justify-center flex-col items-center ">
            <img className="w-40 h-20 " src={Victoria} />
            <div className="w-50 h-1 bg-gray-300 mt-3"></div>
          </div>
          <div className="flex justify-center flex-col items-center ">
            <img className="w-40 h-20" src={Toyota} />
            <div className="w-50 h-1 bg-gray-300 mt-3"></div>
          </div>
          <div className="flex justify-center flex-col items-center ">
            <img className="w-40 h-20" src={LG} />
            <div className="w-50 h-1 bg-gray-300 mt-3"></div>
          </div>
          <div className="flex justify-center flex-col items-center ">
            <img className="w-40 h-20" src={Novo_Nordisk} />
            <div className="w-50 h-1 bg-gray-300 mt-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Loved;
