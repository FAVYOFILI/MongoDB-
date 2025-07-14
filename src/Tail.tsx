// import React from  "react"
import Univelcity from "./assets/Univelcity.png"

const TailwindCss = () => {
    return (
      <header className="bg-amber-600 px-16 py-5 flex justify-between items-center">
        <div>
          <img src={Univelcity} className="w-40 ml-8" />
        </div>

        <nav>
          <ul className="flex gap-6 text-white font-bold ">
            <li className="hover: cursor-pointer">Courses</li>
            <li className="hover: cursor-pointer">Full Stack</li>
            <li className="hover: cursor-pointer">Corporate</li>
            <li className="hover: cursor-pointer">Hire Tech Talents</li>
          </ul>
        </nav>

        <button className="py-3 px-6 text-white bg-green-500 font-bold rounded-md shadow-md hover:bg-amber-700 cursor-pointer">
          Browse Courses
        </button>
      </header>
    );
}

export default TailwindCss