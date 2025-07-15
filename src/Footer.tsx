import footer from "./assets/Footer.svg"
import Website from "./assets/Website.svg"

const Footer = () => {
  return (
    <footer className=" bg-cyan-950 text-white py-8 px-4 font-serif ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 font-serif">
          {/* MongoDB Logo */}
          <div className="mb-6 md:mb-0">
            <img src={footer} className="w-[120px]" />
            {/* <img src= {Website}className="text-lg font-semibold mb-4"/>English */}
          </div>

          {/* English Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4 font-serif">English</h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-blue-600 text-[14px]">About</a>
              </li>
              <li className="ml-4">
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Concern
                </a>
              </li>
              <li className="ml-4">
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Investor Relations
                </a>
              </li>
              <li className="ml-4">
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Legal
                </a>
              </li>
              <li className="ml-4">
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Privacy Policy
                </a>
              </li>
              <li className="ml-4">
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  GitHub
                </a>
              </li>
              <li className="ml-4">
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Security Information
                </a>
              </li>
              <li className="ml-4">
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Trust Center
                </a>
              </li>
              <li className="ml-4">
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Connect with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="flex-1">
            <h3 className="text-[14px] font-semibold mb-4 font-serif">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Customer Portal
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Atlas Status
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Customer Support
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Manage Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Deployment Options */}
          <div className="flex-1">
            <h3 className="text-[14px] font-semibold mb-4 font-serif">
              Deployment Options
            </h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  MongoDB Atlas
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Enterprise Advanced
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Community Edition
                </a>
              </li>
            </ul>
          </div>

          {/* Data Basics */}
          <div className="flex-1">
            <h3 className="text-[14px] font-semibold mb-4 font-serif">
              Data Basics
            </h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Vector Databases
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  NoSQL Databases
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  Document Databases
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  RAG Databases
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  ACID Transactions
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  MEAN Stack
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600  text-[12px] font-serif">
                  MERN Stack
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="">
          <p className="mr-50px text-[10px] font-serif">© 2024 MongoDB, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
