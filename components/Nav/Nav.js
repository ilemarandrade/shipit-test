import React from "react";
import Link from "next/link";
import "./nav.module.css";
import { Logo, Items } from "./const";

const Nav = ({ items = Items }) => {
  let itemsOfNav = items.map((e, i) => {
    return (
      <Link href={e.path}>
        <a
          key={i + e.label}
          className="text-indigo-900 hover:text-blue-400 mr-7 text-sm"
        >
          {e.label}
        </a>
      </Link>
    );
  });
  return (
    <div id="Nav" className="flex justify-between items-center">
      <Link href="/">
        <img id="logo" className="ml-7" src={Logo.url} />
      </Link>

      <div className="flex items-center">{itemsOfNav}</div>
    </div>
  );
};

export default Nav;
