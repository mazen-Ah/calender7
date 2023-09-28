// Import necessary dependencies from Next.js and React
import Link from "next/link";
import React from "react";

const SideMenu = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4 absolute h-screen left-0 top-0 bottom-0">
      <ul>
        <li className="mb-2">
          <Link className="block hover:text-blue-500" href="/">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link className="block hover:text-blue-500" href="/">
            Calendar
          </Link>
        </li>
        <li className="mb-2">
          <Link className="block hover:text-blue-500" href="/">
            Tasks
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideMenu;
