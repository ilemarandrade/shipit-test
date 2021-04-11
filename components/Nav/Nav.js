import React from "react";
import Link from "next/link";
import { Logo, Items } from "./const";

const Nav = ({ items = Items }) => {
  let itemsOfNav = items.map((e) => {
    return (
      <Link href={e.path}>
        <a className="text-indigo-900 hover:text-blue-400 ml-7 text-sm">
          {e.label}
        </a>
      </Link>
    );
  });
  return (
    <div className="flex justify-between">
      <Link href="/">
        <img className="ml-7" style={{ width: Logo.width }} src={Logo.url} />
      </Link>

      <div className="flex items-center">{itemsOfNav}</div>
    </div>
  );
};

export default Nav;
