"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "White Liners",
    date: "2024",
    category: "Photography",
    filter: "photo-filter",
    image: "/images/01hero.jpg",
    link: "/project/white-liners",
    curtainColor: "#7e5041",
    className: "clapat-item photo-filter",
  },
  {
    id: "02",
    title: "Green Audio",
    date: "2024",
    category: "Product Design",
    filter: "design-filter",
    image: "/images/02hero.jpg",
    link: "/project/green-audio",
    curtainColor: "#0c0c0c",
    className: "clapat-item vertical-parallax design-filter",
  },
  {
    id: "03",
    title: "Nanotech",
    date: "2024",
    category: "Photography",
    filter: "photo-filter",
    image: "/images/03hero.jpg",
    link: "/project/nanotech",
    curtainColor: "#fe6720",
    className: "clapat-item photo-filter",
  },
  {
    id: "04",
    title: "Cool Dude",
    date: "2024",
    category: "Video Production",
    filter: "video-filter",
    image: "/images/04hero.jpg",
    video: "/images/04hero.mp4",
    link: "/project/cool-dude",
    curtainColor: "#d4d4d4",
    className: "clapat-item vertical-parallax video-filter",
  },
  {
    id: "05",
    title: "Sphere Digital",
    date: "2024",
    category: "Graphic Design",
    filter: "design-filter",
    image: "/images/05hero.jpg",
    link: "/project/sphere-digital",
    curtainColor: "#0c0c0c",
    className: "clapat-item design-filter",
  },
  {
    id: "06",
    title: "Leather Chair",
    date: "2024",
    category: "Product Design",
    filter: "design-filter",
    image: "/images/06hero.jpg",
    link: "/project/leather-chair",
    curtainColor: "#7f4c2c",
    className: "clapat-item photo-filter",
  },
  {
    id: "07",
    title: "Folding Phone",
    date: "2024",
    category: "Graphic Design",
    filter: "design-filter",
    image: "/images/07hero.jpg",
    link: "/project/folding-phone",
    curtainColor: "#939393",
    className: "clapat-item design-filter",
  },
  {
    id: "08",
    title: "Enclosure",
    date: "2024",
    category: "Photography",
    filter: "photo-filter",
    image: "/images/08hero.jpg",
    link: "/project/enclosure",
    curtainColor: "#6e8a94",
    className: "clapat-item vertical-parallax photo-filter",
  },
];

const filters = [
  { id: "all", label: "All", filter: "" },
  { id: "design", label: "Design", filter: "design-filter" },
  { id: "video", label: "Video", filter: "video-filter" },
  { id: "photo", label: "Photo", filter: "photo-filter" },
];

export default function PortfolioGridPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    const selectedFilter = filters.find((f) => f.id === activeFilter);
    return selectedFilter ? project.filter === selectedFilter.filter : true;
  });

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
                        <span>projects</span>
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
                  <div id="hero-footer" className="has-border">
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
                      <div className="filters-options-wrapper">
                        {filters.map((filter) => (
                          <a
                            key={filter.id}
                            className={`filter-option ${
                              activeFilter === filter.id ? "is_active" : ""
                            }`}
                            href="#"
                            data-filter={filter.filter}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveFilter(filter.id);
                            }}
                          >
                            <span className="link" data-hover={filter.label}>
                              {filter.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div id="main-content">
                <div id="main-page-content">
                  {/* Showcase Portfolio Holder */}
                  <div id="itemsWrapperLinks">
                    <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
                      {/* ClaPat Portfolio */}
                      <div className="showcase-portfolio">
                        {filteredProjects.map((project) => (
                          <div key={project.id} className={project.className}>
                            <div
                              className={`slide-inner trigger-item ${
                                project.video ? "change-header" : ""
                              }`}
                              data-centerline="OPEN"
                            >
                              <div className="img-mask">
                                <div
                                  className="curtains"
                                  data-curtain-color={project.curtainColor}
                                >
                                  <div className="curtain-row"></div>
                                </div>
                                <Link
                                  href={project.link}
                                  className="slide-link"
                                  data-type="page-transition"
                                >
                                  <span className="sr-only">
                                    View {project.title}
                                  </span>
                                </Link>
                                <div className="section-image trigger-item-link">
                                  <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="item-image grid__item-img"
                                    width={800}
                                    height={600}
                                    priority={project.id === "01"}
                                  />
                                  {project.video && (
                                    <div className="hero-video-wrapper">
                                      <video loop muted className="bgvid">
                                        <source
                                          src={project.video}
                                          type="video/mp4"
                                        />
                                      </video>
                                    </div>
                                  )}
                                </div>
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  className="grid__item-img grid__item-img--large"
                                  width={1200}
                                  height={900}
                                  priority={project.id === "01"}
                                />
                              </div>
                              <div className="slide-caption trigger-item-link-secondary">
                                <div className="slide-title">
                                  <span>{project.title}</span>
                                </div>
                                <div className="slide-date">
                                  <span>{project.date}</span>
                                </div>
                                <div className="slide-cat">
                                  <span>{project.category}</span>
                                </div>
                              </div>
                            </div>
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
