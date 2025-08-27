"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function ContactPage() {
  return (
    <main>
      <Preloader />

      <div className="cd-index cd-main-content">
        <div
          id="clapat-page-content"
          className="light-content"
          data-bgcolor="#0c0c0c"
        >
          <Header />

          <div id="content-scroll">
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
                        <span>Contact Us</span>
                      </h1>
                      <div className="hero-subtitle caption-timeline">
                        <span>
                          GET IN TOUCH WITH OUR TEAM <br className="destroy" />
                          LET&apos;S DISCUSS YOUR PROJECT AND BRING YOUR IDEAS
                          TO LIFE.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div id="main-content">
                <div id="main-page-content" className="content-full-width">
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
