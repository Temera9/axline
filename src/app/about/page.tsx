"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function AboutPage() {
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
                        <span>About Us</span>
                      </h1>
                      <div className="hero-subtitle caption-timeline">
                        <span>
                          PASSIONATE CREATORS DEDICATED TO BRINGING YOUR VISION
                          TO LIFE <br className="destroy" />
                          THROUGH INNOVATIVE DESIGN AND CUTTING-EDGE TECHNOLOGY.
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
                    <div className="inner">
                      <h2>Our Story</h2>
                      <p>
                        Founded with a passion for creating exceptional digital
                        experiences, AXline has been at the forefront of
                        creative design and development. Our team combines
                        artistic vision with technical expertise to deliver
                        solutions that not only look stunning but also perform
                        flawlessly.
                      </p>
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
