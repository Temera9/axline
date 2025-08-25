// src/components/Hero.tsx
'use client'

export default function Hero() {
  return (
    <div id="hero">
      <div id="hero-styles">
        <div id="hero-caption" className="content-full-width parallax-scroll-caption text-align-center height-title">
          <div className="inner">
            <h1 className="hero-title caption-timeline primary-font-title">
              <span>AXline</span>
            </h1>
            <div className="hero-subtitle caption-timeline">
              <span>
                WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING <br className="destroy" /> 
                DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION <br className="destroy" /> 
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
                <span data-hover="Scroll to Explore">Scroll to Explore</span>
              </div>
            </div>
          </div>
          <div className="hero-footer-right">
            <div id="info-text">Featured Projects</div>
          </div>
        </div>
      </div>
    </div>
  )
}