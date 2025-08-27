"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Image from "next/image";

// Project data mapping
const projectData: Record<string, any> = {
  "white-liners": {
    title: "White Liners",
    category: "Photography",
    date: "2024",
    description:
      "A stunning photography series capturing the essence of minimalist design.",
    images: [
      "/images/projects/liners01.jpg",
      "/images/projects/liners02.jpg",
      "/images/projects/liners03.jpg",
    ],
  },
  "green-audio": {
    title: "Green Audio",
    category: "Photography",
    date: "2024",
    description:
      "Exploring the intersection of nature and technology through sound.",
    images: [
      "/images/projects/green01.jpg",
      "/images/projects/green02.jpg",
      "/images/projects/green03.jpg",
    ],
  },
  nanotech: {
    title: "Nanotech",
    category: "Branding",
    date: "2024",
    description:
      "Revolutionary branding for cutting-edge nanotechnology solutions.",
    images: [
      "/images/projects/nano01.jpg",
      "/images/projects/nano02.jpg",
      "/images/projects/nano03.jpg",
    ],
  },
  "cool-dude": {
    title: "Cool Dude",
    category: "Video Production",
    date: "2024",
    description:
      "Creative video production showcasing modern lifestyle and culture.",
    images: ["/images/projects/dude01.jpg"],
  },
  "sphere-digital": {
    title: "Sphere Digital",
    category: "Graphic Design",
    date: "2024",
    description: "Digital art and graphic design for the modern era.",
    images: [
      "/images/projects/enclosure01.jpg",
      "/images/projects/enclosure02.jpg",
    ],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug];

  if (!project) {
    return (
      <main>
        <div className="cd-index cd-main-content">
          <div
            id="clapat-page-content"
            className="light-content"
            data-bgcolor="#0c0c0c"
          >
            <Header />
            <div id="content-scroll">
              <div id="main">
                <div
                  className="content-row dark-section text-align-center"
                  data-bgcolor="#0c0c0c"
                >
                  <h1>Project Not Found</h1>
                  <p>The requested project could not be found.</p>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </main>
    );
  }

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
                        <span>{project.title}</span>
                      </h1>
                      <div className="hero-subtitle caption-timeline">
                        <span>{project.description}</span>
                      </div>
                      <div className="project-meta">
                        <span className="project-category">
                          {project.category}
                        </span>{" "}
                        • <span className="project-date">{project.date}</span>
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
                    <div className="project-images">
                      {project.images.map((image: string, index: number) => (
                        <div key={index} className="project-image-wrapper">
                          <Image
                            src={image}
                            alt={`${project.title} - Image ${index + 1}`}
                            width={1200}
                            height={800}
                            className="project-image"
                          />
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
