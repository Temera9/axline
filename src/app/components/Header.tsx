// src/components/Header.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fullscreen-menu invert-header" data-menucolor="#0c0c0c">
      <div id="header-container">
        
        {/* Logo */}
        <div id="logo" className="hide-ball">
          <Link className="ajax-link" href="/">
            <Image 
              className="black-logo" 
              src="/images/logo.png" 
              alt="ClaPat Logo"
              width={100}
              height={50}
            />
            <Image 
              className="white-logo" 
              src="/images/logo-white.png" 
              alt="ClaPat Logo"
              width={100}
              height={50}
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
                    <a href="#">
                      <div className="before-span">
                        <span data-hover="Portfolio">Portfolio</span>
                      </div>
                    </a>
                    <ul>
                      <li>
                        <Link className="ajax-link active" href="/">
                          Overlapping Gallery
                        </Link>
                      </li>
                      <li>
                        <Link className="ajax-link" href="/portfolio-grid">
                          Portfolio Grid
                        </Link>
                      </li>
                      <li>
                        <Link className="ajax-link" href="/portfolio-gallery">
                          Archive Gallery
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="link menu-timeline">
                    <Link className="ajax-link" href="/about">
                      <div className="before-span">
                        <span data-hover="About">About</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <Link className="ajax-link" href="/contact">
                      <div className="before-span">
                        <span data-hover="Contact">Contact</span>
                      </div>
                    </Link>
                  </li>
                  <li className="link menu-timeline">
                    <a href="#">
                      <div className="before-span">
                        <span data-hover="More">More</span>
                      </div>
                    </a>
                    <ul>
                      <li>
                        <Link className="ajax-link" href="/typography">
                          Typography
                        </Link>
                      </li>
                      <li>
                        <Link className="ajax-link" href="/multimedia">
                          Multimedia
                        </Link>
                      </li>
                      <li>
                        <Link className="ajax-link" href="/shortcodes">
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
  )
}