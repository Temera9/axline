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
              src="/images/logo.png"
              alt="AXline Logo"
              width={100}
              height={40}
              priority
            />
            <Image
              className="white-logo"
              src="/images/logo-white.png"
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
                    <a href="#" className="">
                      <div className="before-span">
                        <span data-hover="Portfolio">Portfolio</span>
                      </div>
                    </a>
                    <ul>
                      <li>
                        <Link
                          href="/"
                          className="ajax-link active"
                          data-type="page-transition"
                        >
                          Overlapping Gallery
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/portfolio-grid"
                          className="ajax-link"
                          data-type="page-transition"
                        >
                          Portfolio Grid
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/portfolio-gallery"
                          className="ajax-link"
                          data-type="page-transition"
                        >
                          Archive Gallery
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="link menu-timeline">
                    <Link
                      href="/about"
                      className="ajax-link"
                      data-type="page-transition"
                    >
                      <div className="before-span">
                        <span data-hover="About">About</span>
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
                        <span data-hover="Contact">Contact</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <a href="#" className="">
                      <div className="before-span">
                        <span data-hover="More">More</span>
                      </div>
                    </a>
                    <ul>
                      <li>
                        <Link
                          href="/typography"
                          className="ajax-link"
                          data-type="page-transition"
                        >
                          Typography
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/multimedia"
                          className="ajax-link"
                          data-type="page-transition"
                        >
                          Multimedia
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shortcodes"
                          className="ajax-link"
                          data-type="page-transition"
                        >
                          Shortcodes
                        </Link>
                      </li>
                    </ul>
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
