import React from "react";

export default function NavBar() {
  return (
    <header>
      <nav
        className="
		 flex flex-wrap
		 items-center
		 justify-between
		 w-full
		 py-4
		 md:py-0
		 px-4
		 text-2xl text-gray-300
		 
	   "
      >
        <div>
          <a href="/">Pramod Sharma</a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul
            className="
			 pt-4
			 text-base text-gray-200
			 md:flex
			 md:justify-between 
			 md:pt-0"
          >
            <li>
              <a className="md:p-4 py-2 block hover:text-blue-300" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-blue-300" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-blue-300" href="#">
                Customers
              </a>
            </li>
            <li>
              <a className="md:p-4 py-2 block hover:text-blue-300" href="#">
                Blog
              </a>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-blue-300 text-blue-500"
                href="#"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
