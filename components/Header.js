import React from "react";
import { useState } from "react";

export default function Container() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="fixed z-50 w-full fh52u">
      <div
        class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
      >
        <div class="flex flex-row items-center justify-between p-4">
          <a
            href="#"
            class="text-lg font-semibold rounded-lg tracking-widestuppercase focus:outline-none focus:shadow-outline"
          >
            <h1 class="text-2xl font-bold tracking-tighter text-white uppercase md:text-sm lg:text-3xl">
              NINE4
            </h1>
          </a>
        </div>
        <nav class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
          <a
            class="px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent rounded-lg text-lg md:mt-0 md:ml-4 focus:text-white hover:bg-white hover:text-black focus:outline-none focus:shadow-outline"
            href="/"
          >
            Docs
          </a>

          <a
            class="inline-flex items-center px-4 py-2 mt-2 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent gwe62 border-gray-800 border rounded-lg text-md md:mt-0 md:ml-4 hover:text-black hover:bg-white focus:shadow-outline"
            href="/"
          >
            <div class="flex text-lg tracking-tighter">
              <span class="justify-center">View Templates</span>
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
}
