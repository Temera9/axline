"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  video?: string;
  link: string;
}

const projects: ProjectItem[] = [
  {
    id: "01",
    title: "Corporate Photography",
    date: "2025",
    category: "Photography",
    image: "/images/01hero.jpg",
    link: "/project/white-liners",
  },
  {
    id: "02",
    title: "Videography & Filming",
    date: "2024",
    category: "Video Production",
    image: "/images/02hero.jpg",
    link: "/project/green-audio",
  },
  {
    id: "03",
    title: "VFX & Motion design",
    date: "2024",
    category: "3D",
    image: "/images/03hero.jpg",
    link: "/project/nanotech",
  },
  {
    id: "04",
    title: "3D architectural Visualisation",
    date: "2024",
    category: "3D",
    image: "/images/04hero.jpg",
    video: "/images/04hero.mp4",
    link: "/project/cool-dude",
  },
  {
    id: "05",
    title: "Graphic Design Print/Digital",
    date: "2024",
    category: "Design",
    image: "/images/05hero.jpg",
    link: "/project/sphere-digital",
  },
];

const OverlappingGallery: React.FC = () => {
  return (
    <div id="itemsWrapperLinks">
      <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
        <div className="overlapping-gallery">
          {projects.map((project) => (
            <div key={project.id} className="overlapping-image">
              <div
                className={`overlapping-image-inner trigger-item ${
                  project.video ? "change-header" : ""
                }`}
                data-centerline="OPEN"
              >
                <div className="img-mask">
                  <Link
                    href={project.link}
                    className="slide-link"
                    data-type="page-transition"
                  >
                    <span className="sr-only">View {project.title}</span>
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
                          <source src={project.video} type="video/mp4" />
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
                  <div className="slide-title primary-font-title">
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
  );
};

export default OverlappingGallery;
