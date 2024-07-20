/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import NRIDA from "/assets/NRIDA.png";
import IITP from "/assets/clg.png";
import './Header.css'

export function Header() {
  const [Nav, setNav] = useState(false);
  
  return (
    <div className="flex w-[100vw] justify-evenly sm:justify-between md:flex-row items-center p-2 pb-0 h-auto md:h-[85px] mb-5">
      <img
        src={NRIDA}
        alt="NRIDA Logo"
        style={{ height: "85px" }}
        className="mt-5 mb-5"
      />
      <nav onClick={()=>setNav(false)} className={`${Nav ? "open" : ""} sm:bg-slate-600 sm:rounded-full`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex sm:h-16 items-center justify-center sm:justify-between">
            <div  className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className=" sm:ml-6 sm:block">
                <div className="flex navmenu sm:space-x-4">
                  <p className="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Link to="/">Home</Link>
                  </p>
                  <p className="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Link to="/aboutclg">About</Link>
                  </p>
                  <p className="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Link to="/aboutNRIDA">NRIDA</Link>
                  </p>
                  <p className="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Link to="/schedule">Schedule</Link>
                  </p>
                  <p className="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Link to="/faq">FAQ</Link>
                  </p>
                  <p className="rounded-md px-3 py-2 font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                    <Link to="/contact">Contact</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <img src={IITP} alt="" style={{ height: "85px" }} className="mt-5 mb-5" />

      <button onClick={()=>setNav(!Nav)}
                type="button"
                className=" inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
    </div>
  );
}

// function CustomLink({ to, children }) {
//     const resolvedPath = useResolvedPath(to);
//     const isActive = useMatch({ path: resolvedPath.pathname, end: true });
//     return (
//         <li className={`px-4 py-2 ${isActive ? '' : ''}`}>
//             <Link to={to}>{children}</Link>
//         </li>
//     );
// }
