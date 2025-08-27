"use client";

import React from "react";
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
    image: "/images/01hero.jpg",
    link: "/project/white-liners",
  },
  {
    id: "02",
    title: "Green Audio",
    date: "2024",
    category: "Photography",
    image: "/images/02hero.jpg",
    link: "/project/green-audio",
  },
  {
    id: "03",
    title: "Nanotech",
    date: "2024",
    category: "Branding",
    image: "/images/03hero.jpg",
    link: "/project/nanotech",
  },
  {
    id: "04",
    title: "Cool Dude",
    date: "2024",
    category: "Video Production",
    image: "/images/04hero.jpg",
    link: "/project/cool-dude",
  },
  {
    id: "05",
    title: "Sphere Digital",
    date: "2024",
    category: "Graphic Design",
    image: "/images/05hero.jpg",
    link: "/project/sphere-digital",
  },
];

export default function PortfolioGridPage() {
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
                        <span>Portfolio</span>
                      </h1>
                      <div className="hero-subtitle caption-timeline">
                        <span>
                          EXPLORE OUR COLLECTION OF CREATIVE WORKS{" "}
                          <br className="destroy" />
                          SPANNING ACROSS DIFFERENT DISCIPLINES AND INDUSTRIES.
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
                    className="content-row dark-section"
                    data-bgcolor="#0c0c0c"
                  >
                    <div className="portfolio-grid">
                      {projects.map((project) => (
                        <div key={project.id} className="portfolio-item">
                          <Link href={project.link} className="portfolio-link">
                            <div className="portfolio-image-wrapper">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="portfolio-image"
                              />
                            </div>
                            <div className="portfolio-info">
                              <h3 className="portfolio-title">
                                {project.title}
                              </h3>
                              <p className="portfolio-category">
                                {project.category}
                              </p>
                              <p className="portfolio-date">{project.date}</p>
                            </div>
                          </Link>
                        </div>
                      ))}
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
