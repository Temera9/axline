"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Link from "next/link";
import Image from "next/image";

export default function MultimediaPage() {
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
                        <span>Multimedia</span>
                      </h1>
                      <div className="hero-subtitle caption-timeline">
                        <span>
                          EXPLORE OUR COLLECTION OF MULTIMEDIA ELEMENTS{" "}
                          <br className="destroy" />
                          INCLUDING IMAGES, VIDEOS, AND INTERACTIVE CONTENT.
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
                      <div id="info-text">Featured Elements</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div id="main-content">
                <div id="main-page-content" className="content-max-width">
                  {/* Gallery Section */}
                  <div
                    className="content-row full row_padding_left row_padding_right row_padding_bottom light-section text-align-center"
                    data-bgcolor="#fff"
                  >
                    <div className="one_half">
                      <figure
                        className="has-animation has-cover"
                        data-delay="100"
                      >
                        <a
                          href="/images/shortcodes/image01.jpg"
                          className="image-link"
                        >
                          <Image
                            src="/images/shortcodes/image01.jpg"
                            alt="Gallery Image 1"
                            width={600}
                            height={400}
                          />
                        </a>
                        <figcaption>Gallery Image 1</figcaption>
                      </figure>
                    </div>

                    <div className="one_half last">
                      <figure
                        className="has-animation has-cover"
                        data-delay="200"
                      >
                        <a
                          href="https://www.youtube.com/watch?v=n8vPxqnsJJs"
                          className="video-link"
                        >
                          <Image
                            src="/images/shortcodes/image02.jpg"
                            alt="Video Thumbnail"
                            width={600}
                            height={400}
                          />
                        </a>
                        <figcaption>YouTube Video</figcaption>
                      </figure>
                    </div>

                    <hr />
                    <hr />

                    <div className="one_third">
                      <figure
                        className="has-animation has-cover"
                        data-delay="100"
                      >
                        <a
                          href="https://vimeo.com/channels/bestofstaffpicks/882020077"
                          className="video-link"
                        >
                          <Image
                            src="/images/shortcodes/image01.jpg"
                            alt="Vimeo Video"
                            width={400}
                            height={300}
                          />
                        </a>
                        <figcaption>Vimeo Video</figcaption>
                      </figure>
                    </div>

                    <div className="one_third">
                      <figure
                        className="has-animation has-cover"
                        data-delay="200"
                      >
                        <a
                          href="/images/shortcodes/image02.jpg"
                          className="image-link"
                        >
                          <Image
                            src="/images/shortcodes/image02.jpg"
                            alt="Gallery Image 2"
                            width={400}
                            height={300}
                          />
                        </a>
                        <figcaption>Gallery Image 2</figcaption>
                      </figure>
                    </div>

                    <div className="one_third last">
                      <figure
                        className="has-animation has-cover"
                        data-delay="300"
                      >
                        <a
                          href="/images/shortcodes/image03.jpg"
                          className="image-link"
                        >
                          <Image
                            src="/images/shortcodes/image03.jpg"
                            alt="Gallery Image 3"
                            width={400}
                            height={300}
                          />
                        </a>
                        <figcaption>Gallery Image 3</figcaption>
                      </figure>
                    </div>
                  </div>

                  {/* Parallax Section */}
                  <div
                    className="content-row full dark-section change-header-color"
                    data-bgcolor="#171717"
                  >
                    <figure
                      className="has-parallax has-parallax-content"
                      data-delay="100"
                    >
                      <Image
                        src="/images/about.jpg"
                        alt="Parallax Background"
                        width={1400}
                        height={800}
                      />
                      <div className="parallax-image-content content-full-width text-align-center">
                        <div className="outer">
                          <div className="inner">
                            <h2>
                              <span className="has-mask-fill">
                                Parallax image or video
                              </span>
                              <br />
                              <span className="has-mask-fill">
                                with content overlay
                              </span>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </figure>
                  </div>

                  {/* Content Slider Section */}
                  <div
                    className="content-row row_padding_top row_padding_bottom light-section text-align-center"
                    data-bgcolor="#fff"
                  >
                    <h5 className="no-margins">Content Slider</h5>
                    <p>
                      Select the color for the cursor on hover and enable <br />
                      autocentering on click event.
                    </p>
                    <hr />

                    <div className="clapat-slider-wrapper content-slider has-animation disabled-slider-dots autoplay light-cursor">
                      <div className="clapat-slider">
                        <div className="clapat-slider-viewport">
                          <div className="clapat-slide">
                            <div className="slide-img">
                              <Image
                                src="/images/shortcodes/image01.jpg"
                                alt="Slide 1"
                                width={800}
                                height={600}
                              />
                            </div>
                          </div>
                          <div className="clapat-slide">
                            <div className="slide-img">
                              <Image
                                src="/images/shortcodes/image02.jpg"
                                alt="Slide 2"
                                width={800}
                                height={600}
                              />
                            </div>
                          </div>
                          <div className="clapat-slide">
                            <div className="slide-img">
                              <Image
                                src="/images/shortcodes/image03.jpg"
                                alt="Slide 3"
                                width={800}
                                height={600}
                              />
                            </div>
                          </div>
                          <div className="clapat-slide">
                            <div className="slide-img">
                              <Image
                                src="/images/shortcodes/image04.jpg"
                                alt="Slide 4"
                                width={800}
                                height={600}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="clapat-controls">
                        <div className="clapat-button-next slider-button-next"></div>
                        <div className="clapat-button-prev slider-button-prev"></div>
                      </div>
                    </div>
                  </div>

                  {/* Video Background Section */}
                  <div
                    className="content-row full dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <div className="hero-video-wrapper">
                      <video loop muted autoPlay className="bgvid">
                        <source src="/images/about.mp4" type="video/mp4" />
                      </video>
                      <div className="video-overlay">
                        <div className="video-content text-align-center">
                          <h2 className="primary-font-title">
                            <span className="has-mask-fill">
                              Video Background
                            </span>
                          </h2>
                          <p>
                            <span className="has-opacity">
                              IMMERSIVE VIDEO BACKGROUNDS CREATE ENGAGING
                              EXPERIENCES
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Elements */}
                  <div
                    className="content-row row_padding_top row_padding_bottom light-section"
                    data-bgcolor="#fff"
                  >
                    <div className="one_half">
                      <h3 className="primary-font-title">
                        Interactive Gallery
                      </h3>
                      <p>
                        Hover and click effects create engaging user experiences
                        that enhance content discovery and navigation.
                      </p>
                    </div>

                    <div className="one_half last">
                      <div className="interactive-gallery">
                        {[1, 2, 3, 4].map((num) => (
                          <div key={num} className="gallery-item">
                            <Image
                              src={`/images/shortcodes/image0${num}.jpg`}
                              alt={`Interactive Image ${num}`}
                              width={150}
                              height={150}
                              className="interactive-image"
                            />
                          </div>
                        ))}
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
                          <span>EXPLORE MORE CREATIVE POSSIBILITIES</span>
                        </div>
                        <Link
                          href="/shortcodes"
                          className="page-title next-ajax-link-page"
                          data-type="page-transition"
                          data-centerline="MORE"
                        >
                          <div className="next-hero-title primary-font-title caption-timeline">
                            <span>Shortcodes</span>
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
