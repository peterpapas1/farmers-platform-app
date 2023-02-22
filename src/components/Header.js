import React from "react";
import { NavLink } from "react-router-dom";
import HeaderNavLink from "../components/HeaderNavLink";

function Header() {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800  shadow ">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" className="flex-shrink-0">
                <h1 className="font-size: 8rem">🚜</h1>
              </NavLink>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  <HeaderNavLink to="/">Weather</HeaderNavLink>
                  <HeaderNavLink to="/Manuals">Manuals</HeaderNavLink>
                  <HeaderNavLink to="/Blog">Blog</HeaderNavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <HeaderNavLink to="/">Weather</HeaderNavLink>
            <HeaderNavLink to="/Manuals">Manuals</HeaderNavLink>
            <HeaderNavLink to="/Blog">Blog</HeaderNavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
