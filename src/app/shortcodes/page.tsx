"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Link from "next/link";
import Image from "next/image";

export default function ShortcodesPage() {
  const teamMembers = [
    {
      name: "Tom Harrison",
      role: "Web Designer",
      since: "Since 2010",
      image: "/images/team1.jpg",
    },
    {
      name: "Ricky Romano",
      role: "UX Designer",
      since: "Since 2012",
      image: "/images/team2.jpg",
    },
    {
      name: "Jane Reeves",
      role: "Art Director",
      since: "Since 2014",
      image: "/images/team3.jpg",
    },
    {
      name: "Billy Craft",
      role: "Developer",
      since: "Since 2016",
      image: "/images/team4.jpg",
    },
    {
      name: "Cheryl Mezines",
      role: "Support Guy",
      since: "Since 2018",
      image: "/images/team5.jpg",
    },
  ];

  const clients = [
    { name: "Client 1", image: "/images/client-01.png" },
    { name: "Client 2", image: "/images/client-02.png" },
    { name: "Client 3", image: "/images/client-03.png" },
    { name: "Client 4", image: "/images/client-04.png" },
    { name: "Client 5", image: "/images/client-05.png" },
    { name: "Client 6", image: "/images/client-06.png" },
    { name: "Client 7", image: "/images/client-07.png" },
    { name: "Client 8", image: "/images/client-08.png" },
  ];

  const accordionItems = [
    {
      title: "Friendly Support",
      content: "We will be with you every step of the way. It's a promise!",
    },
    {
      title: "Quality Design",
      content:
        "Our designs are carefully crafted with attention to every detail and user experience.",
    },
    {
      title: "Modern Technology",
      content:
        "We use the latest technologies and frameworks to ensure optimal performance.",
    },
    {
      title: "Custom Solutions",
      content:
        "Every project is unique and we provide tailored solutions for your specific needs.",
    },
  ];

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
                        <span>Shortcodes</span>
                      </h1>
                      <div className="hero-subtitle caption-timeline">
                        <span>
                          DISCOVER OUR COLLECTION OF DESIGN ELEMENTS{" "}
                          <br className="destroy" />
                          AND INTERACTIVE COMPONENTS FOR MODERN WEB EXPERIENCES.
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
                  {/* Team Members Section */}
                  <div
                    className="content-row full row_padding_bottom light-section"
                    data-bgcolor="#fff"
                  >
                    <ul className="team-members-list" data-fx="1">
                      {teamMembers.map((member, index) => (
                        <li
                          key={index}
                          className="link has-hover-image"
                          data-img={member.image}
                        >
                          <div className="team-member has-animation">
                            <span>{member.since}</span>
                            <div className="primary-font-title">
                              {member.name}
                            </div>
                            <span>{member.role}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clients Table Section */}
                  <div
                    className="content-row full row_padding_top row_padding_bottom row_padding_left row_padding_right dark-section change-header-color text-align-center"
                    data-bgcolor="#0c0c0c"
                  >
                    <ul className="clients-table">
                      {clients.map((client, index) => (
                        <li key={index} className="link">
                          <a target="_blank" href="https://www.axline.com/">
                            <Image
                              src={client.image}
                              alt={client.name}
                              width={150}
                              height={100}
                            />
                          </a>
                          <div className="overlay"></div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Accordion Section */}
                  <div
                    className="content-row row_padding_top light-section"
                    data-bgcolor="#fff"
                  >
                    <dl className="accordion has-animation">
                      {accordionItems.map((item, index) => (
                        <React.Fragment key={index}>
                          <dt>
                            <span className="link">
                              <div>{item.title}</div>
                            </span>
                            <div className="acc-icon-wrap parallax-wrap">
                              <div className="acc-button-icon parallax-element">
                                <i className="fa fa-arrow-right"></i>
                              </div>
                            </div>
                          </dt>
                          <dd className="accordion-content">{item.content}</dd>
                        </React.Fragment>
                      ))}
                    </dl>
                  </div>

                  {/* Buttons Section */}
                  <div
                    className="content-row row_padding_top row_padding_bottom text-align-center light-section"
                    data-bgcolor="#fff"
                  >
                    <h3 className="primary-font-title">Button Styles</h3>
                    <hr />

                    <div className="button-box has-animation">
                      <div className="clapat-button-wrap parallax-wrap hide-ball">
                        <div className="clapat-button parallax-element">
                          <div className="button-border outline rounded parallax-element-second">
                            <Link href="/contact">
                              <span data-hover="Get In Touch">
                                Get In Touch
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="button-box has-animation">
                      <div className="clapat-button-wrap parallax-wrap hide-ball">
                        <div className="clapat-button parallax-element">
                          <div className="button-border filled rounded parallax-element-second">
                            <Link href="/portfolio-grid">
                              <span data-hover="View Portfolio">
                                View Portfolio
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography Section */}
                  <div
                    className="content-row row_padding_top row_padding_bottom light-section"
                    data-bgcolor="#fff"
                  >
                    <div className="one_half">
                      <h1 className="primary-font-title">Typography</h1>
                      <h2>Heading Level 2</h2>
                      <h3>Heading Level 3</h3>
                      <h4>Heading Level 4</h4>
                      <h5>Heading Level 5</h5>
                      <h6>Heading Level 6</h6>
                    </div>

                    <div className="one_half last">
                      <p>
                        <strong>This is a paragraph</strong> with some sample
                        text to demonstrate the typography styles used
                        throughout the website. The text flows naturally and
                        maintains good readability across different devices.
                      </p>

                      <blockquote>
                        "Design is not just what it looks like and feels like.
                        Design is how it works."
                        <cite>— Steve Jobs</cite>
                      </blockquote>

                      <ul>
                        <li>Unordered list item one</li>
                        <li>Unordered list item two</li>
                        <li>Unordered list item three</li>
                      </ul>

                      <ol>
                        <li>Ordered list item one</li>
                        <li>Ordered list item two</li>
                        <li>Ordered list item three</li>
                      </ol>
                    </div>
                  </div>

                  {/* Columns Section */}
                  <div
                    className="content-row row_padding_top row_padding_bottom dark-section change-header-color"
                    data-bgcolor="#171717"
                  >
                    <div className="one_third">
                      <div className="box-icon-wrapper">
                        <div className="box-icon">
                          <i
                            className="fa fa-lightbulb fa-2x"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="box-icon-content">
                          <h6>Creative Ideas</h6>
                          <p>
                            We bring innovative solutions to every project with
                            creative thinking.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="one_third">
                      <div className="box-icon-wrapper">
                        <div className="box-icon">
                          <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="box-icon-content">
                          <h6>Technical Excellence</h6>
                          <p>
                            Our technical expertise ensures robust and scalable
                            solutions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="one_third last">
                      <div className="box-icon-wrapper">
                        <div className="box-icon">
                          <i
                            className="fa fa-heart fa-2x"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="box-icon-content">
                          <h6>Passion Driven</h6>
                          <p>
                            We are passionate about creating exceptional user
                            experiences.
                          </p>
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
                          <span>READY TO START YOUR PROJECT?</span>
                        </div>
                        <Link
                          href="/contact"
                          className="page-title next-ajax-link-page"
                          data-type="page-transition"
                          data-centerline="CONTACT"
                        >
                          <div className="next-hero-title primary-font-title caption-timeline">
                            <span>Get In Touch</span>
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
