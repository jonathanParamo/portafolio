// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <navbar>
//       <Link to='/'>Home</Link>
//       <Link to='/greeting'>Greeting</Link>
//     </navbar>
//   )
// }

import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (sectionId) => {
    setActive(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${
        scrolled ? "bg-primary" : "bg-transparent"
      } w-full flex items-center py-5 fixed top-0 z-20 bg-violet-600
      dark:bg-darkPrimary h-4 sm:h-14 lg:h-16 xs:px-1 sm:px-2 md:px-4 lg:px-8
      `}
    >
      <div className='w-full flex justify-around items-center max-w-7xl mx-auto'>
        <div className='flex items-center pl-2 lg:pl-0' onClick={() => window.scrollTo(0, 0)}>
          <p className='text-[18px] md:text-[22px] flex md:text-lg font-bold dark:bg-darkPrimary text-white
            dark:hover:text-cyan-500 hover:text-violet-100
            '>
            | Jonathan &nbsp;
          </p>
            <span className='text-[18px] md:text-[22px] flex md:text-lg font-bold dark:bg-darkPrimary text-white
              sm:block hidden dark:hover:text-cyan-500 hover:text-violet-100'>
                Guaydia P.
            </span>
        </div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          <li
            className={`${
              active === "section1" ? "text-red-100 dark:text-violet-300" : "dark:text-cyan-300 text-white "
            } hover:text-white text-[19px] font-medium cursor-pointer`}
            onClick={() => handleLinkClick("section1")}
          >
            About
          </li>
          <li
            className={`${
              active === "section2" ? "text-red-100 dark:text-violet-300" : "dark:text-cyan-300 text-white"
            } hover:text-white text-[19px] font-medium cursor-pointer`}
            onClick={() => handleLinkClick("section2")}
          >
            Jobs
          </li>

          <li
            className={`${
              active === "section3" ? "text-red-100 dark:text-violet-300" : "dark:text-cyan-300 text-white"
            } hover:text-white text-[19px] font-medium cursor-pointer`}
            onClick={() => handleLinkClick("section3")}
          >
            Experience
          </li>
        </ul>

        <div className='sm:hidden flex items-center'>
          <div onClick={() => setToggle(!toggle)} className='text-white text-[18px] font-medium cursor-pointer'>
            {toggle ? <MdClose size={24} /> : <MdMenu size={24} />}
          </div>
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-16 right-0 mx-4 my-2 min-w-[200px] z-20 rounded-xl
          bg-violet-600 dark:bg-darkPrimary shadow-lg`}
        >
          <ul className='list-none flex flex-col gap-4'>
            <li
              className={`font-medium cursor-pointer text-[16px] ${
                active === "section1" ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(false);
                handleLinkClick("section1");
              }}
            >
              About
            </li>
            <li
              className={`font-medium cursor-pointer text-[16px] ${
                active === "section2" ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(false);
                handleLinkClick("section2");
              }}
            >
              Jobs
            </li>
            <li
              className={`font-medium cursor-pointer text-[16px] ${
                active === "section3" ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(false);
                handleLinkClick("section3");
              }}
            >
              Experience
            </li>
          </ul>
        </div>
      <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;

