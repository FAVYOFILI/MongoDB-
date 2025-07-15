import Document from "./assets/Document.svg";
import Education from "./assets/Education.svg";
import Community from "./assets/Community.svg";

const Documentation = () => {
  return (
    <>
      <div className="w-100% h-150 bg-cyan-950 flex items-center justify-evenly font-serif">
        <div className="w-100 h-90 bg-cyan-950 flex rounded-4xl flex-col items-center cursor-pointer border-2 text-white">
          <img className="w-20 h-20 rounded-xl mt-4 mr-60" src={Document} />
          <p className="text-3xl mt-5 mr-65 font-serif">Docs</p>
          <p className="text-1xl mt-5 pr-20 font-serif">
            Reference manuals, articles, and
            <br /> code samples — all the technical
            <br />
            Documentation you need to deploy,
            <br /> configure, and run MongoDB
          </p>
          <p className="text-2xl mr-40 mt-7 font-serif">Documentation</p>
        </div>
        <div className="w-100 h-90 bg-cyan-950 flex rounded-4xl flex-col items-center cursor-pointer text-white border-2">
          <img className="w-20 h-20 rounded-xl mt-4 mr-60 " src={Education} />
          <p className="text-3xl mt-5 mr-13 font-serif">MongoDB University</p>
          <p className="text-1xl mt-5 pr-20 font-serif ">
            Level up your MongoDB skills with <br />
            free courses, labs, badges, and
            <br />
            MongoDB certification.
          </p>
          <p className="text-2xl mt-12 mr-29 font-serif">
            Start learning Today
          </p>
        </div>
        <div className="w-100 h-90 bg-cyan-950 flex rounded-4xl flex-col items-center cursor-pointer text-white border-2">
          <img className="w-20 h-20 rounded-xl mt-4 mr-60" src={Community} />
          <p className="text-3xl mt-5 mr-19 font-serif">Community Forum</p>
          <p className="text-1xl mt-5 pr-20 font-serif ">
            Join 175K+ developers on our
            <br /> Community Forums to get advice,
            <br /> learn tips and tricks, and share your
            <br /> projects and experience
          </p>
          <p className="text-2xl mt-7 mr-29 font-serif">Join the Community</p>
        </div>
      </div>
    </>
  );
};
export default Documentation;
