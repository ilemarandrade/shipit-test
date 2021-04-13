import React from "react";
import Link from "next/link";
import styles from "./nav.module.css";
import { Logo } from "./const";

const Nav = ({ items = [] }) => {
  let itemsOfNav;

  items.length > 0 ? (
    (itemsOfNav = items.map((e, i) => {
      return (
        <Link key={i + e.label} href={e.path}>
          <a className="text-indigo-900 hover:text-blue-400 mr-7 text-sm">
            {e.label}
          </a>
        </Link>
      );
    }))
  ) : (
    <></>
  );
  return (
    <div id={styles.Nav} className="flex justify-between items-center">
      <Link href="/">
        <img id={styles.logo} className="ml-10" src={Logo.url} />
      </Link>

      <div id={styles.menuDesktop} className="flex items-center">
        {itemsOfNav}
      </div>
    </div>
  );
};

export default Nav;
