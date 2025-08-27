"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Link from "next/link";

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
                        <span>Our Studio</span>
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
                      <div id="info-text">Our Short Story</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div id="main-content">
                <div id="main-page-content" className="content-max-width">
                  {/* Video/Image Section */}
                  <div
                    className="content-row dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <div className="clipped-image-wrapper">
                      <div className="clipped-image-pin">
                        <div className="clipped-image">
                          <img src="/images/about.jpg" alt="About AXline" />
                          <div className="content-video-wrapper">
                            <video loop muted playsInline className="bgvid">
                              <source
                                src="/images/about.mp4"
                                type="video/mp4"
                              />
                            </video>
                          </div>
                          <div className="clipped-image-gradient"></div>
                        </div>
                      </div>
                      <div className="clipped-image-content text-align-center content-full-width">
                        {/* Content can be added here if needed */}
                      </div>
                    </div>
                  </div>

                  {/* Recognitions Section */}
                  <div
                    className="content-row text-align-center dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <div className="move-thumbs-wrapper">
                      <div className="start-thumbs-caption">
                        <h2 className="primary-font-title big-title has-mask-fill">
                          Recognitions
                        </h2>
                        <p>OUR PRESTIGIOUS DESIGN AWARDS</p>
                      </div>

                      <div className="start-thumbs-wrapper">
                        <div
                          className="start-move-thumb"
                          data-start="top 120%"
                          data-stop="600%"
                        >
                          <div className="move-thumb-inner">
                            <div className="section-image">
                              <img
                                src="/images/aw01.jpg"
                                className="item-image"
                                alt="Award 1"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="start-move-thumb"
                          data-start="top 90%"
                          data-stop="1100%"
                        >
                          <div className="move-thumb-inner">
                            <div className="section-image">
                              <img
                                src="/images/aw02.jpg"
                                className="item-image"
                                alt="Award 2"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="start-move-thumb"
                          data-start="top 90%"
                          data-stop="400%"
                        >
                          <div className="move-thumb-inner">
                            <div className="section-image">
                              <img
                                src="/images/aw03.jpg"
                                className="item-image"
                                alt="Award 3"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="start-move-thumb"
                          data-start="top 120%"
                          data-stop="600%"
                        >
                          <div className="move-thumb-inner">
                            <div className="section-image">
                              <img
                                src="/images/aw04.jpg"
                                className="item-image"
                                alt="Award 4"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="start-move-thumb"
                          data-start="top 100%"
                          data-stop="750%"
                        >
                          <div className="move-thumb-inner">
                            <div className="section-image">
                              <img
                                src="/images/aw05.jpg"
                                className="item-image"
                                alt="Award 5"
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="start-move-thumb"
                          data-start="top 40%"
                          data-stop="300%"
                        >
                          <div className="move-thumb-inner">
                            <div className="section-image">
                              <img
                                src="/images/aw06.jpg"
                                className="item-image"
                                alt="Award 6"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="end-thumbs-wrapper">
                        <div className="end-move-thumb"></div>
                        <div className="end-move-thumb"></div>
                        <div className="end-move-thumb"></div>
                        <div className="end-move-thumb"></div>
                        <div className="end-move-thumb"></div>
                        <div className="end-move-thumb"></div>
                      </div>
                    </div>
                  </div>

                  {/* More Awards Section */}
                  <div
                    className="content-row full row_padding_left row_padding_right row_padding_bottom text-align-center dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <hr />
                    <hr />
                    <hr className="destroy" />
                    <h2 className="big-title primary-font-title no-margins has-mask-fill">
                      More Awards
                    </h2>
                    <hr />
                    <hr />
                    <hr />
                    <hr className="destroy" />

                    <ul className="flex-lists-wrapper">
                      <li className="flex-list link has-animation">
                        <span className="flex-list-left">Awwwards</span>
                        <span className="flex-list-center">
                          Developer Award, Site of the Day, Honorable Mention
                        </span>
                        <span className="flex-list-right">x08 Awards</span>
                      </li>
                      <li className="flex-list link has-animation">
                        <span className="flex-list-left">
                          CSS Design Awards
                        </span>
                        <span className="flex-list-center">
                          Website of the Day, Special Kudos
                        </span>
                        <span className="flex-list-right">x06 Awards</span>
                      </li>
                      <li className="flex-list link has-animation">
                        <span className="flex-list-left">Behance</span>
                        <span className="flex-list-center">
                          Featured UX/UI and XD Design
                        </span>
                        <span className="flex-list-right">x04 Awards</span>
                      </li>
                      <li className="flex-list link has-animation">
                        <span className="flex-list-left">CSS Light</span>
                        <span className="flex-list-center">
                          Featured Website, Featured Design
                        </span>
                        <span className="flex-list-right">x12 Awards</span>
                      </li>
                      <li className="flex-list link has-animation">
                        <span className="flex-list-left">FWA Awards</span>
                        <span className="flex-list-center">
                          FWA of the day, FWA of the month
                        </span>
                        <span className="flex-list-right">x04 Awards</span>
                      </li>
                      <li className="flex-list link has-animation">
                        <span className="flex-list-left">One Page Love</span>
                        <span className="flex-list-center">
                          Site of the Day
                        </span>
                        <span className="flex-list-right">x10 Awards</span>
                      </li>
                      <li className="flex-list link has-animation">
                        <span className="flex-list-left">SiteInspire</span>
                        <span className="flex-list-center">
                          Featured Website
                        </span>
                        <span className="flex-list-right">x08 Awards</span>
                      </li>
                      <li className="flex-list link has-animation">
                        <span className="flex-list-left">CSS Winner</span>
                        <span className="flex-list-center">
                          Site of the Day, Special Mention
                        </span>
                        <span className="flex-list-right">x12 Awards</span>
                      </li>
                    </ul>
                    <hr className="destroy" />
                  </div>

                  {/* Our Services Section */}
                  <div
                    className="content-row row_padding_top row_padding_bottom light-section change-header-color has-clip-path"
                    data-bgcolor="#fff"
                  >
                    <hr className="destroy" />
                    <hr className="destroy" />

                    <div className="pinned-section">
                      <div className="pinned-element left">
                        <h2 className="big-title primary-font-title no-margins">
                          <span className="has-mask-fill">Our</span>
                          <br />
                          <span className="has-mask-fill">Services</span>
                        </h2>
                      </div>

                      <div className="scrolling-element right">
                        <dl className="accordion has-animation">
                          <dt>
                            <span className="link">
                              <div>Web Design</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            We create stunning and user-friendly websites that
                            make a lasting impression and drive conversions.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>Mobile App Development</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            Our team crafts innovative and feature-rich mobile
                            applications that cater to the needs of modern
                            users.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>E-Commerce Solutions</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            We build seamless online shopping experiences that
                            empower businesses to reach customers globally.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>Digital Marketing</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            Our strategic digital marketing campaigns help
                            businesses amplify their online presence and achieve
                            their growth goals.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>UI/UX Design</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            We design intuitive and visually appealing user
                            interfaces that enhance user experiences and
                            streamline interactions.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>Brand Strategy</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            Our brand strategists develop strong and compelling
                            brand identities that resonate with target
                            audiences.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>SEO Optimization</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            We optimize websites to improve search engine
                            visibility, driving organic traffic and increasing
                            online visibility.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>Social Media Management</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            Our social media experts manage and curate engaging
                            content, fostering meaningful connections with
                            audiences.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>Content Creation</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            Our creative team produces compelling and impactful
                            content that tells your brand's story and captivates
                            your audience.
                          </dd>

                          <dt>
                            <span className="link">
                              <div>Data Analytics</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">
                            We analyze data to uncover valuable insights and
                            guide data-driven decision-making for business
                            growth and success.
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <hr className="destroy" />
                  </div>

                  {/* Collaborators Section */}
                  <div
                    className="content-row full row_padding_top row_padding_left row_padding_right text-align-center dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <h2 className="big-title primary-font-title">
                      <span className="has-mask-fill">Collaborators</span>
                    </h2>
                    <p>
                      WE DEVELOP GORGEOUS AND MEMORABLE{" "}
                      <br className="destroy" />
                      PROJECTS FOR OUR CLIENTS.
                    </p>
                    <hr />
                    <hr />
                  </div>

                  {/* Moving Gallery Section */}
                  <div
                    className="content-row full row_padding_bottom dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <div className="moving-gallery bw-gallery">
                      <ul className="wrapper-gallery">
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-05.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">
                            Karioca Studio
                          </div>
                        </li>
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-01.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">Andre</div>
                        </li>
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-02.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">
                            Mattey Webber
                          </div>
                        </li>
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-03.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">
                            AXline Themes
                          </div>
                        </li>
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-04.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">
                            California
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="moving-gallery fw-gallery">
                      <ul className="wrapper-gallery">
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-08.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">
                            Rare View
                          </div>
                        </li>
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-05.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">
                            Karioca Studio
                          </div>
                        </li>
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-06.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">Tetris</div>
                        </li>
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-07.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">
                            Harington
                          </div>
                        </li>
                        <li className="link">
                          <a target="_blank" href="#">
                            <img src="/images/client-08.png" alt="client" />
                          </a>
                          <div className="moving-gallery-caption">
                            Rare View
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Team Section */}
                  <div
                    className="content-row full row_padding_top row_padding_bottom dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <ul className="team-members-list" data-fx="1">
                      <li
                        className="link has-hover-image"
                        data-img="/images/team1.jpg"
                      >
                        <div className="team-member has-animation">
                          <span>Since 2010</span>
                          <div className="primary-font-title">Tom Harrison</div>
                          <span>Web Designer</span>
                        </div>
                      </li>
                      <li
                        className="link has-hover-image"
                        data-img="/images/team2.jpg"
                      >
                        <div className="team-member has-animation">
                          <span>Since 2012</span>
                          <div className="primary-font-title">Ricky Romano</div>
                          <span>UX Designer</span>
                        </div>
                      </li>
                      <li
                        className="link has-hover-image"
                        data-img="/images/team3.jpg"
                      >
                        <div className="team-member has-animation">
                          <span>Since 2014</span>
                          <div className="primary-font-title">Jane Reeves</div>
                          <span>Art Director</span>
                        </div>
                      </li>
                      <li
                        className="link has-hover-image"
                        data-img="/images/team4.jpg"
                      >
                        <div className="team-member has-animation">
                          <span>Since 2016</span>
                          <div className="primary-font-title">Billy Craft</div>
                          <span>Developer</span>
                        </div>
                      </li>
                      <li
                        className="link has-hover-image"
                        data-img="/images/team5.jpg"
                      >
                        <div className="team-member has-animation">
                          <span>Since 2018</span>
                          <div className="primary-font-title">
                            Cheryl Mezines
                          </div>
                          <span>Support Guy</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Page Navigation */}
                <div id="page-nav">
                  <div className="page-nav-wrap">
                    <div className="page-nav-caption content-full-width text-align-center height-title">
                      <div className="inner">
                        <div className="next-hero-subtitle caption-timeline">
                          <span>
                            CONTACT US AND LET'S BRING YOUR VISION TO LIFE
                          </span>
                        </div>
                        <Link
                          href="/contact"
                          className="page-title next-ajax-link-page"
                          data-type="page-transition"
                          data-centerline="Say Hey"
                        >
                          <div className="next-hero-title primary-font-title caption-timeline">
                            <span>Contact</span>
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
