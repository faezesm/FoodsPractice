"use client";

import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";

import classes from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={logoImg} alt="no image yet" priority />
        <p>Next Level Food</p>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}>Brows Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
