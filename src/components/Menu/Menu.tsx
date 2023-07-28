import Link from "next/link";
import React from "react";

export const Menu = (): JSX.Element => {
  return (
    <nav className="w-full bg-gray-800 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0">
          <menu className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white">
              <Link href="/about">Sobre nós</Link>
            </li>
          </menu>
        </div>
      </div>
    </nav>
  );
};
