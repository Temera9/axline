"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Link from "next/link";

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
                        <span>Contact</span>
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
                      <div id="info-text">Get in Touch</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div id="main-content">
                <div id="main-page-content" className="content-max-width">
                  {/* Map Section */}
                  <div
                    className="content-row full row_padding_left row_padding_right dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <div id="map_canvas"></div>
                  </div>

                  {/* Contact Form Section */}
                  <div
                    className="content-row row_padding_top row_padding_bottom dark-section text-align-center"
                    data-bgcolor="#0c0c0c"
                  >
                    <h2 className="big-title has-mask-fill primary-font-title">
                      Let's Talk
                    </h2>
                    <hr />
                    <hr />

                    {/* Contact Formular */}
                    <div id="contact-formular">
                      <div id="message"></div>

                      <form
                        method="post"
                        action="#"
                        name="contactform"
                        id="contactform"
                      >
                        <div className="name-box">
                          <input
                            name="name"
                            type="text"
                            id="name"
                            size={30}
                            defaultValue=""
                            placeholder="What's Your Name"
                          />
                          <label className="input_label"></label>
                        </div>

                        <div className="email-box">
                          <input
                            name="email"
                            type="text"
                            id="email"
                            size={30}
                            defaultValue=""
                            placeholder="Your Email"
                          />
                          <label className="input_label"></label>
                        </div>

                        <div className="message-box">
                          <textarea
                            name="comments"
                            cols={40}
                            rows={4}
                            id="comments"
                            placeholder="Tell Us About Your Project"
                          ></textarea>
                          <label className="input_label slow"></label>
                        </div>

                        <div className="verify-box">
                          <ul className="verify-sum">
                            <li>1</li>
                            <li>+</li>
                            <li>3</li>
                            <li>=</li>
                          </ul>
                          <input
                            name="verify"
                            type="text"
                            id="verify"
                            size={4}
                            defaultValue=""
                          />
                          <p className="required">
                            <span>*</span> Captcha Validation
                          </p>
                        </div>

                        <div className="button-box">
                          <div className="clapat-button-wrap parallax-wrap link">
                            <div className="clapat-button parallax-element">
                              <div className="button-border rounded outline">
                                <input
                                  type="submit"
                                  className="send_message"
                                  id="submit"
                                  value="Send Message"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Contact Info Section */}
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
                            INTERESTED TO DISCOVER MORE FROM OUR WORKS?
                          </span>
                        </div>
                        <Link
                          href="/portfolio-grid"
                          className="page-title next-ajax-link-page"
                          data-type="page-transition"
                          data-centerline="GO TO"
                        >
                          <div className="next-hero-title primary-font-title caption-timeline">
                            <span>Projects</span>
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
