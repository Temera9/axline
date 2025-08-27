"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import OverlappingGallery from "@/components/OverlappingGallery";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Preloader />

      <div className="cd-index cd-main-content">
        {/* Page Content */}
        <div
          id="clapat-page-content"
          className="light-content"
          data-bgcolor="#0c0c0c"
        >
          <Header />

          {/* Content Scroll */}
          <div id="content-scroll">
            {/* Main */}
            <div id="main">
              {/* Hero Section */}
              <div id="hero">
                <div id="hero-styles">
                  <div
                    id="hero-caption"
                    className="content-full-width parallax-scroll-caption text-align-center height-title"
                  >
                    <div className="inner">
                      <h1 className="hero-title caption-timeline primary-font-title">
                        <span>AXline</span>
                      </h1>
                      <div className="hero-subtitle caption-timeline">
                        <span>
                          WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY,
                          BRANDING <br className="destroy" />
                          DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE
                          INTERSECTION <br className="destroy" />
                          OF DESIGN AND TECHNOLOGY.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="hero-footer">
                    <div className="hero-footer-left">
                      <div className="button-wrap right scroll-down">
                        <div className="icon-wrap parallax-wrap">
                          <div className="button-icon parallax-element">
                            <i className="fa-solid fa-angle-down"></i>
                          </div>
                        </div>
                        <div className="button-text sticky right">
                          <span data-hover="Scroll to Explore">
                            Scroll to Explore
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="hero-footer-right">
                      <div id="info-text">Featured Projects</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div id="main-content">
                {/* Main Page Content */}
                <div id="main-page-content" className="content-full-width">
                  {/* Portfolio Row */}
                  <div
                    className="content-row full text-align-center row_padding_left row_padding_right dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <OverlappingGallery />

                    <hr />

                    <p>
                      <span className="has-opacity">
                        CRAFTING WEBSITES WHERE THE ELEGANCE
                      </span>
                      <br className="destroy" />
                      <span className="has-opacity">
                        OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING
                        PRODUCTS.
                      </span>
                    </p>

                    <div className="button-box text-align-center has-animation fadeout-element">
                      <div className="clapat-button-wrap parallax-wrap hide-ball">
                        <div className="clapat-button parallax-element">
                          <div className="button-border outline rounded parallax-element-second">
                            <Link
                              href="/portfolio-grid"
                              className="ajax-link"
                              data-type="page-transition"
                            >
                              <span data-hover="See All Works">
                                See All Works
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills Row */}
                  <div
                    className="content-row full row_padding_left row_padding_right dark-section fadeout-element"
                    data-bgcolor="#0c0c0c"
                  >
                    <div className="list-rotator-wrapper">
                      <div className="list-rotator-title">OUR SKILLS COVER</div>
                      <div className="list-rotator-pin">
                        <ul className="list-rotator primary-font-title">
                          <li>Web Design</li>
                          <li>Mobile App Development</li>
                          <li>UI/UX Design</li>
                          <li>SEO Optimization</li>
                          <li>Social Media Management</li>
                          <li>Data Analytics</li>
                          <li>Content Creation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Row */}
                  <div
                    className="content-row dark-section text-align-center"
                    data-bgcolor="#0c0c0c"
                  >
                    <div className="one_third has-animation" data-delay="100">
                      <div className="box-icon-wrapper block-boxes">
                        <div className="box-icon">
                          <i
                            className="fa fa-paper-plane fa-2x"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="box-icon-content">
                          <h6 className="no-margins">
                            <a href="mailto:office@axline.com" className="link">
                              <span>office@axline.com</span>
                            </a>
                          </h6>
                          <p>Email</p>
                        </div>
                      </div>
                    </div>

                    <div className="one_third has-animation" data-delay="200">
                      <div className="box-icon-wrapper block-boxes">
                        <div className="box-icon">
                          <i
                            className="fa fa-map-marker fa-2x"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="box-icon-content">
                          <h6 className="no-margins">
                            35 M Str, New York, USA
                          </h6>
                          <p>Address</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="one_third last has-animation"
                      data-delay="300"
                    >
                      <div className="box-icon-wrapper block-boxes">
                        <div className="box-icon">
                          <i
                            className="fa fa-phone fa-2x"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="box-icon-content">
                          <h6 className="no-margins">0040 (7763) 574-8901</h6>
                          <p>Phone</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Page Navigation */}
                <div id="page-nav">
                  <div className="page-nav-wrap">
                    <div className="page-nav-caption content-full-width text-align-center height-title">
                      <div className="inner">
                        <div className="next-hero-subtitle caption-timeline">
                          <span>
                            EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN
                          </span>
                        </div>
                        <Link
                          href="/about"
                          className="page-title next-ajax-link-page"
                          data-type="page-transition"
                          data-centerline="ABOUT US"
                        >
                          <div className="next-hero-title primary-font-title caption-timeline">
                            <span>Our Studio</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>

          <div id="app"></div>
        </div>
      </div>
    </main>
  );
}
