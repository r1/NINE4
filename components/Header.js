import React from "react";

export default function Container() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="z-50 w-full">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-4xl font-bold tracking-tighter text-white uppercase md:text-md lg:text-3xl">
              NINE4
            </h1>
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <nav className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <a
              className="py-2 mt-2 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-lg md:mt-0 md:ml-4"
              href="https://github.com/r1/nine4"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="px-7 py-2 mt-2 font-semibold text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-lg md:mt-0 md:ml-4"
              href="/license"
            >
              License
            </a>
            <a
              className="inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent gwe62 g327 border rounded-lg text-md md:mt-0 md:ml-4 hover:text-black hover:bg-white focus:shadow-outline"
              href="/templates"
            >
              <div className="flex text-lg tracking-tighter">
                <span className="justify-center">View Templates</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
