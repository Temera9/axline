"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="fullscreen-menu invert-header" data-menucolor="#0c0c0c">
      <div id="header-container">
        {/* Logo */}
        <div id="logo" className="hide-ball">
          <Link href="/" className="ajax-link" data-type="page-transition">
            <Image
              className="black-logo"
              src="/images/logo-axline.png"
              alt="AXline Logo"
              width={100}
              height={40}
              priority
            />
            <Image
              className="white-logo"
              src="/images/logo-axline.png"
              alt="AXline Logo"
              width={100}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <div className="nav-height">
            <div className="outer">
              <div className="inner">
                <ul data-breakpoint="10025" className="flexnav">
                <li className="link menu-timeline">
                    <Link
                      href="/about"
                      className="ajax-link"
                      data-type="page-transition"
                    >
                      <div className="before-span">
                        <span data-hover="Our World">Our World</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <Link
                      href="/about"
                      className="ajax-link"
                      data-type="page-transition"
                    >
                      <div className="before-span">
                        <span data-hover="Our Story">Our Story</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <Link
                      href="/contact"
                      className="ajax-link"
                      data-type="page-transition"
                    >
                      <div className="before-span">
                        <span data-hover="What we create">What we create</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <Link
                      href="/contact"
                      className="ajax-link"
                      data-type="page-transition"
                    >
                      <div className="before-span">
                        <span data-hover="Be par of it">Be par of it</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <Link
                      href="/contact"
                      className="ajax-link"
                      data-type="page-transition"
                    >
                      <div className="before-span">
                        <span data-hover="Contact Us">Contact Us</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* Menu Burger */}
        <div className="button-wrap right menu burger-lines">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <div id="burger-wrapper">
                <div id="menu-burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="button-text sticky right">
            <span data-hover="Menu">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
