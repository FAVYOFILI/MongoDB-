import Logo from "./assets/Logo.svg"
import Website from "./assets/Website.svg"
import Dropdown from "./assets/Dropdown.svg"
import Search from "./assets/Search.svg";
const Header = () => {
    return (
      <header className="px-16 py-4 flex items-center justify-between w-[100%] bg-white">
        <div>
          <img src={Logo} className="w-40 h-7" />
        </div>

        <nav>
          <ul className="flex gap-6 text-black mr-[100px] font-serif ">
            <li className="hover: cursor-pointer ">
              Products
              {/* <img src={Dropdown} className="" /> */}
            </li>
            <li className="hover: cursor-pointer">Resources</li>
            <li className="hover: cursor-pointer">Solutions</li>
            <li className="hover: cursor-pointer">Company</li>
            <li className="hover: cursor-pointer">Pricing</li>
          </ul>
        </nav>

        <div>
          <nav>
            <ul className="flex gap-6 font-serif ">
              <img src={Search} className="" />
              <li className="hover: cursor-pointer">
                {/* <img src={Website} className="" /> */}
                Eng
              </li>
              <li className="hover: cursor-pointer">Support</li>
              <li className="hover: cursor-pointer">Sign In</li>
            </ul>
          </nav>
        </div>
        <button className="bg-green-400 hover: cursor-pointer py-3 px-6 rounded-md shadow-md font-serif ">
          Get Started
        </button>
      </header>
    );
}









export default Header