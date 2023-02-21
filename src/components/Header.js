import React from "react";

function Header() {
  return (
    <div>
      <nav class="bg-white dark:bg-gray-800  shadow ">
        <div class="px-8 mx-auto max-w-7xl">
          <div class="flex items-center justify-between h-16">
            <div class=" flex items-center">
              <a class="flex-shrink-0" href="/">
                <h1 className="font-size: 8rem">🚜</h1>
              </a>
              <div class="hidden md:block">
                <div class="flex items-baseline ml-10 space-x-4">
                  <a
                    class="text-gray-800 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/"
                  >
                    Weather
                  </a>
                  <a
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/Manuals"
                  >
                    Manuals
                  </a>
                  <a
                    class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/Blog"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              class="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/"
            >
              Weather
            </a>
            <a
              class="text-gray-500 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/Manuals"
            >
              Manuals
            </a>
            <a
              class="text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/Blog"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
