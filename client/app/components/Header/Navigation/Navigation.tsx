"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./Navigation.scss";
import userIcon from "../../../../public/userIcon.svg";
import { CustomLink } from "../../CustomLink";
import { PageLinks } from "@/app/utils/endpoint";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "initial";
    }
  }, [showMenu]);

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="nav">
      <button
        className="nav-burger"
        type="button"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div
          className={`nav-burger_1 ${showMenu ? "nav-burger_1--open" : ""}`}
        />
        <div className="nav-burger_2" />
        <div
          className={`nav-burger_3 ${showMenu ? "nav-burger_3--open" : ""}`}
        />
      </button>
      <nav className={`nav__menu ${showMenu ? "nav__menu--open" : ""}`}>
        <Link
          onClick={closeMenu}
          href={PageLinks.MARKETPLACE}
          className="nav__link"
        >
          Marketplace
        </Link>
        <Link
          onClick={closeMenu}
          href={PageLinks.RANKINGS}
          className="nav__link"
        >
          Rankings
        </Link>
        <Link onClick={closeMenu} href={PageLinks.WALLET} className="nav__link">
          Connect a wallet
        </Link>
        <div onClick={closeMenu} className="nav__link-btn-wrapper">
          <CustomLink
            href="/signup"
            iconSrc={userIcon}
            iconAlt="user"
            iconHeight={20}
            iconWidth={20}
          >
            Sign Up
          </CustomLink>
        </div>
      </nav>
    </div>
  );
}
