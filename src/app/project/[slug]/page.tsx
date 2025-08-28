import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Données temporaires des projets
const projectsData: Record<string, any> = {
  "white-liners": {
    title: "White Liners",
    heroImage: "/images/01hero.jpg",
    description:
      "As you navigate through the projects, you'll discover a harmonious blend of creativity and functionality, seamlessly brought to life by the dynamic capabilities of our shortcodes. Each shortcode serves as a building block, unlocking a world of possibilities for expressing your ideas and presenting your content in ways that are both visually stunning and highly engaging.",
    date: "January 2024",
    role: "Art Direction, Web Design, Production",
    websiteUrl: "https://www.behance.net/gallery/188644629/Yioiy",
    challenge:
      "DEVELOPING ONLINE PRESENCES WHERE THE SOPHISTICATION OF VISUAL DESIGN MEETS THE CALCULATED SCIENCE OF PRODUCT SELLING.",
    research:
      "DESIGNING ONLINE PLATFORMS WHERE THE ARTISTRY OF VISUAL APPEAL CONVERGES WITH THE STRATEGY OF PRODUCT MARKETABILITY.",
    solution:
      "CRAFTING WEBSITES WHERE THE ELEGANCE OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS.",
  },
  "green-audio": {
    title: "Green Audio",
    heroImage: "/images/02hero.jpg",
    description:
      "A harmonious blend of audio technology and sustainable design, creating innovative solutions for modern audio experiences.",
    date: "February 2024",
    role: "Product Design, Branding, User Experience",
    challenge:
      "CREATING SUSTAINABLE AUDIO SOLUTIONS WITHOUT COMPROMISING ON QUALITY AND PERFORMANCE.",
    research:
      "EXPLORING ECO-FRIENDLY MATERIALS AND TECHNOLOGIES FOR NEXT-GENERATION AUDIO PRODUCTS.",
    solution:
      "DEVELOPING A LINE OF PREMIUM AUDIO PRODUCTS USING RECYCLED MATERIALS AND RENEWABLE ENERGY.",
  },
  nanotech: {
    title: "Nanotech",
    heroImage: "/images/03hero.jpg",
    description:
      "Cutting-edge nanotechnology solutions that bridge the gap between science and practical applications.",
    date: "March 2024",
    role: "Research, Brand Identity, Digital Strategy",
    challenge:
      "MAKING COMPLEX NANOTECHNOLOGY ACCESSIBLE AND UNDERSTANDABLE TO MAINSTREAM AUDIENCES.",
    research:
      "STUDYING MARKET NEEDS AND TECHNOLOGICAL POSSIBILITIES IN THE NANOTECHNOLOGY SECTOR.",
    solution:
      "CREATING A COMPREHENSIVE BRAND IDENTITY THAT SIMPLIFIES COMPLEX SCIENCE INTO DIGESTIBLE CONCEPTS.",
  },
  "cool-dude": {
    title: "Cool Dude",
    heroImage: "/images/04hero.jpg",
    description:
      "A vibrant video production project showcasing creative storytelling and innovative visual effects.",
    date: "April 2024",
    role: "Video Production, Creative Direction, Post-Production",
    challenge:
      "CREATING ENGAGING VIDEO CONTENT THAT RESONATES WITH YOUNG AUDIENCES ACROSS MULTIPLE PLATFORMS.",
    research:
      "ANALYZING TRENDING VIDEO FORMATS AND SOCIAL MEDIA CONSUMPTION PATTERNS.",
    solution:
      "PRODUCING HIGH-ENERGY, VISUALLY STRIKING CONTENT OPTIMIZED FOR DIGITAL PLATFORMS.",
  },
  "sphere-digital": {
    title: "Sphere Digital",
    heroImage: "/images/05hero.jpg",
    description:
      "Digital transformation solutions that create immersive experiences through innovative technology and design.",
    date: "May 2024",
    role: "Digital Strategy, UI/UX Design, Development",
    challenge:
      "TRANSFORMING TRADITIONAL BUSINESS MODELS INTO DIGITAL-FIRST EXPERIENCES.",
    research:
      "INVESTIGATING EMERGING DIGITAL TECHNOLOGIES AND USER EXPERIENCE TRENDS.",
    solution:
      "DEVELOPING COMPREHENSIVE DIGITAL ECOSYSTEMS THAT ENHANCE USER ENGAGEMENT AND BUSINESS OUTCOMES.",
  },
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
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
              <div id="hero" className="has-image">
                <div id="hero-styles">
                  <div
                    id="hero-caption"
                    className="content-full-width height-title"
                  >
                    <div className="inner">
                      <h1 className="hero-title caption-timeline primary-font-title">
                        <span>{project.title}</span>
                      </h1>
                    </div>
                  </div>
                  <div id="hero-description" className="content-full-width">
                    <div className="inner">
                      <p className="bigger has-opacity">
                        {project.description}
                      </p>
                      <br />
                      <p className="bigger no-margins">Date</p>
                      <p className="has-opacity">{project.date}</p>
                      <p className="bigger no-margins">Role</p>
                      <p className="has-opacity no-margins">{project.role}</p>
                      <hr />
                      {project.websiteUrl && (
                        <p className="has-animation">
                          [
                          <a
                            className="link-text"
                            target="_blank"
                            href={project.websiteUrl}
                            rel="noopener noreferrer"
                          >
                            <span className="link" data-hover="View Website">
                              View Website
                            </span>
                          </a>
                          ]
                        </p>
                      )}
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
                      <div
                        id="share"
                        className="page-action-content"
                        data-text="Share:"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="hero-image-wrapper">
                <div
                  id="hero-background-layer"
                  className="parallax-scroll-image"
                >
                  <div
                    id="hero-bg-image"
                    style={{ backgroundImage: `url(${project.heroImage})` }}
                  ></div>
                </div>
              </div>

              {/* Main Content */}
              <div id="main-content">
                <div id="main-page-content">
                  {/* Challenge Section */}
                  <div
                    className="content-row row_padding_top row_padding_bottom light-section change-header-color"
                    data-bgcolor="#fff"
                  >
                    <div className="one_half"></div>
                    <div className="one_half last">
                      <h1 className="primary-font-title has-mask-fill">
                        The Challenge
                      </h1>
                      <p>
                        <span className="has-opacity">{project.challenge}</span>
                      </p>
                    </div>
                  </div>

                  {/* Research Section */}
                  <div
                    className="content-row row_padding_bottom light-section change-header-color"
                    data-bgcolor="#fff"
                  >
                    <div className="one_half">
                      <h1 className="primary-font-title has-mask-fill">
                        The Research
                      </h1>
                      <p>
                        <span className="has-opacity">{project.research}</span>
                      </p>
                    </div>
                    <div className="one_half last"></div>
                  </div>

                  {/* Solution Section */}
                  <div
                    className="content-row row_padding_top light-section change-header-color text-align-center"
                    data-bgcolor="#fff"
                  >
                    <h1 className="primary-font-title has-mask-fill">
                      The Solution
                    </h1>
                    <p>
                      <span className="has-opacity">{project.solution}</span>
                    </p>
                    <hr />
                  </div>
                </div>

                {/* Project Navigation */}
                <div id="project-nav" className="">
                  <div className="next-project-wrap">
                    <p className="all-works">
                      <Link
                        href="/"
                        className="link-text ajax-link"
                        data-type="page-transition"
                      >
                        <span className="link" data-hover="View All Works">
                          View All Works
                        </span>
                      </Link>
                    </p>
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
