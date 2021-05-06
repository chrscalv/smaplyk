import { useEffect } from "react";
import Link from "next/link";

const NavBar = () => {

  useEffect(() => {

    var navMenuDiv = document.getElementById("nav-content");
    var navMenu = document.getElementById("nav-toggle");

    document.onclick = check;
    function check(e) {
      var target = (e && e.target);

      if (!checkParent(target, navMenuDiv)) {
        if (checkParent(target, navMenu)) {
          if (navMenuDiv.classList.contains("hidden")) {
            navMenuDiv.classList.remove("hidden");
          } else {
            navMenuDiv.classList.add("hidden");
          }
        } else {
          navMenuDiv.classList.add("hidden");
        }
      }
    }

    function checkParent(t, elm) {
      while (t.parentNode) {
        if (t == elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    }

  }, []);

  return (
    <>
      <nav id="header" className="gradient fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <Link href="/">
              <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                <img className="fill-current inline" width="60" height="90" src="/logo-sma.png" />
                    SMA PL
                </a>
            </Link>
          </div>
          <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              <i className="fas fa-bars fa-lg"></i>
            </button>
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
            <ul className="list-reset lg:flex justify-end flex-1 items-center">

              <li className="mr-3 dropdown">
                <a className="font-semibold inline-flex items-center">
                  Dropdown <i className="fas fa-angle-down"></i>
                </a>
                <ul className="dropdown-content absolute hidden text-gray-700 pt-1">
                  <li><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 1</a></li>
                  <li><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 2</a></li>

                  <li><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Option 4</a></li>
                </ul>
              </li>

              <li className="mr-3">
                <Link href="/tentang">
                  <a className="font-semibold inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4">Tentang</a>
                </Link>
              </li>
              <li className="mr-3">
                <Link href="/artikel">
                  <a className="font-semibold inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Artikel</a>
                </Link>

              </li>

              <li className="mr-3">
                <a className="font-semibold inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">E-Learning</a>
              </li>

            </ul>




            <Link href="http://ppdb.smaplyk.sch.id/">
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                PPDB
                </button>
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}

export default NavBar;