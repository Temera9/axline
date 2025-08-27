"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

const projects = [
  {
    id: "01",
    title: "White Liners",
    category: "Graphic Design",
    image: "/images/01hero.jpg",
    slug: "white-liners",
    size: "s25",
    filter: "photo-filter",
  },
  {
    id: "02",
    title: "Green Audio",
    category: "Graphic Design",
    image: "/images/02hero.jpg",
    slug: "green-audio",
    size: "s75",
    filter: "design-filter",
    speed: true,
    scale: "has-scale-medium",
  },
  {
    id: "03",
    title: "Nanotech",
    category: "Graphic Design",
    image: "/images/03hero.jpg",
    slug: "nanotech",
    size: "s0",
    filter: "photo-filter",
    scale: "has-scale-small",
  },
  {
    id: "04",
    title: "Cool Dude",
    category: "Graphic Design",
    image: "/images/04hero.jpg",
    slug: "cool-dude",
    size: "s50",
    filter: "video-filter",
    speed: true,
    video: "/images/04hero.mp4",
    changeHeader: true,
  },
  {
    id: "05",
    title: "Sphere Digital",
    category: "Graphic Design",
    image: "/images/05hero.jpg",
    slug: "sphere-digital",
    size: "s100",
    filter: "design-filter",
    scale: "has-scale-medium",
  },
  {
    id: "06",
    title: "Leather Chair",
    category: "Graphic Design",
    image: "/images/06hero.jpg",
    slug: "leather-chair",
    size: "s50",
    filter: "photo-filter",
    speed: true,
  },
  {
    id: "07",
    title: "Folding Phone",
    category: "Graphic Design",
    image: "/images/07hero.jpg",
    slug: "folding-phone",
    size: "s0",
    filter: "design-filter",
    scale: "has-scale-small",
    changeHeader: true,
  },
  {
    id: "08",
    title: "Enclosure",
    category: "Graphic Design",
    image: "/images/08hero.jpg",
    slug: "enclosure",
    size: "s100",
    filter: "photo-filter",
    speed: true,
    scale: "has-scale-medium",
  },
];

export default function PortfolioGallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    // Masquer le preloader immédiatement après le montage
    setIsLoading(false);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <main className="cd-index cd-main-content">
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
            {/* Main Content */}
            <div id="main-content">
              {/* Showcase Slider Holder */}
              <div id="itemsWrapperLinks">
                <div id="itemsWrapper" className="webgl-fitthumbs fx-six">
                  {/* ClaPat Slider */}
                  <div className="clapat-slider-wrapper showcase-gallery preview-mode-enabled">
                    <div className="clapat-slider">
                      {/* ClaPat Main Slider */}
                      <div className="clapat-slider-viewport">
                        {projects.map((project, index) => (
                          <div
                            key={project.id}
                            className={`clapat-slide ${project.size} ${
                              currentSlide === index ? "active" : ""
                            }`}
                          >
                            <div
                              className={`slide-events ${
                                project.speed ? "speed-50" : ""
                              } ${project.scale || ""}`}
                            >
                              <div
                                className={`slide-inner ${project.filter}`}
                                data-centerline="VIEW"
                              >
                                <div className="slide-moving">
                                  <div
                                    className={`trigger-item ${
                                      project.changeHeader
                                        ? "change-header"
                                        : ""
                                    }`}
                                    data-centerline="OPEN"
                                  >
                                    <div className="img-mask">
                                      <Link
                                        className="slide-link"
                                        data-type="page-transition"
                                        href={`/project/${project.slug}`}
                                      >
                                        <div className="parallax-wrap">
                                          <div className="parallax-element">
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                          </div>
                                        </div>
                                      </Link>

                                      <div className="section-image trigger-item-link">
                                        <Image
                                          src={project.image}
                                          alt={project.title}
                                          width={800}
                                          height={600}
                                          className="item-image grid__item-img"
                                          onLoad={handleImageLoad}
                                          priority={index === 0} // Prioriser la première image
                                        />

                                        {project.video && (
                                          <div className="hero-video-wrapper">
                                            <video
                                              loop
                                              muted
                                              playsInline
                                              className="bgvid"
                                            >
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
                                        width={800}
                                        height={600}
                                        className="grid__item-img grid__item-img--large"
                                        onLoad={handleImageLoad}
                                        priority={index === 0} // Prioriser la première image
                                      />
                                    </div>
                                  </div>

                                  <div className="slide-caption">
                                    <div className="slide-title">
                                      <span>{project.title}</span>
                                    </div>
                                    <div className="slide-cat">
                                      <span>{project.category}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* /ClaPat Main Slider */}

                      <div className="slider-fixed-content">
                        <div
                          id="slide-inner-temporary"
                          className="fadeout-element"
                        >
                          <div
                            id="slide-inner-caption"
                            className="content-full-width text-align-center height-title"
                          >
                            <div className="inner">
                              <h1 className="slide-hero-title caption-timeline primary-font-title">
                                <span>The Archive</span>
                              </h1>
                              <div className="slide-hero-subtitle caption-timeline">
                                <span>
                                  THESE PROJECTS ARE TOO VALUABLE TO BE LOST.{" "}
                                  <br className="destroy" /> REPRESENTS OUR
                                  DEDICATION, CREATIVITY, AND ESSENCE OF EFFORT.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="gallery-zoom-wrapper"></div>
                    <div className="gallery-thumbs-wrapper"></div>
                    <div className="gallery-close-thumbs"></div>
                  </div>
                  {/* /ClaPat Slider */}
                </div>
              </div>
              {/* /Showcase Slider Holder */}
            </div>
            {/* /Main Content */}
          </div>
          {/* /Main */}

          {/* Footer */}
          <footer className="hidden">
            <div id="footer-container">
              <button
                className="cp-button-prev clapat-button"
                onClick={prevSlide}
              >
                <div className="icon-wrap-scale">
                  <div className="icon-wrap parallax-wrap">
                    <div className="button-icon parallax-element">
                      <i className="fa-solid fa-arrow-left"></i>
                    </div>
                  </div>
                </div>
                <div className="button-text sticky left">
                  <span data-hover="PREV">PREV</span>
                </div>
              </button>

              <div className="progress-info fadeout-element">
                <div className="progress-info-fill">Scroll or Drag</div>
                <div className="progress-info-fill-2">Scroll or Drag</div>
              </div>

              <button
                className="cp-button-next clapat-button"
                onClick={nextSlide}
              >
                <div className="icon-wrap-scale">
                  <div className="icon-wrap parallax-wrap">
                    <div className="button-icon parallax-element">
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
                <div className="button-text sticky right">
                  <span data-hover="NEXT">NEXT</span>
                </div>
              </button>
            </div>
          </footer>
          {/* /Footer */}
        </div>
        {/* /Content Scroll */}

        {/* Thumbnails */}
        <div className="thumb-wrapper">
          <div className="thumb-container">
            {projects.map((project) => (
              <div
                key={project.id}
                className="thumb-page"
                data-src={project.image}
              ></div>
            ))}
          </div>
        </div>

        <div id="app"></div>
      </div>
    </main>
  );
}
