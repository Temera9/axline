// src/components/PortfolioGallery.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: "White Liners",
    date: "2024",
    category: "Photography",
    image: "/images/01hero.jpg",
    link: "/project/white-liners"
  },
  {
    id: 2,
    title: "Green Audio",
    date: "2024",
    category: "Photography",
    image: "/images/02hero.jpg",
    link: "/project/green-audio"
  },
  {
    id: 3,
    title: "Nanotech",
    date: "2024",
    category: "Branding",
    image: "/images/03hero.jpg",
    link: "/project/nanotech"
  },
  {
    id: 4,
    title: "Cool Dude",
    date: "2024",
    category: "Video Production",
    image: "/images/04hero.jpg",
    video: "/images/04hero.mp4",
    link: "/project/cool-dude"
  },
  {
    id: 5,
    title: "Sphere Digital",
    date: "2024",
    category: "Graphic Design",
    image: "/images/05hero.jpg",
    link: "/project/sphere-digital"
  }
]

export default function PortfolioGallery() {
  return (
    <div className="content-row full text-align-center row_padding_left row_padding_right dark-section" data-bgcolor="#0c0c0c">
      
      <div id="itemsWrapperLinks">
        <div id="itemsWrapper" className="webgl-fitthumbs fx-one">
          <div className="overlapping-gallery">
            
            {portfolioItems.map((item) => (
              <div key={item.id} className="overlapping-image">
                <div className="overlapping-image-inner trigger-item" data-centerline="OPEN">
                  <div className="img-mask">
                    <Link className="slide-link" href={item.link} />
                    <div className="section-image trigger-item-link">
                      <Image 
                        src={item.image} 
                        className="item-image grid__item-img" 
                        alt={item.title}
                        width={800}
                        height={600}
                      />
                      {item.video && (
                        <div className="hero-video-wrapper">
                          <video loop muted className="bgvid">
                            <source src={item.video} type="video/mp4" />
                          </video>
                        </div>
                      )}
                    </div>
                    <Image 
                      src={item.image} 
                      className="grid__item-img grid__item-img--large" 
                      alt={item.title}
                      width={1200}
                      height={900}
                    />
                  </div>
                  <div className="slide-caption trigger-item-link-secondary">
                    <div className="slide-title primary-font-title">
                      <span>{item.title}</span>
                    </div>
                    <div className="slide-date">
                      <span>{item.date}</span>
                    </div>
                    <div className="slide-cat">
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      
      <hr />
      
      <p>
        <span className="has-opacity">CRAFTING WEBSITES WHERE THE ELEGANCE</span>
        <br className="destroy" />
        <span className="has-opacity">OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS.</span>
      </p>
      
      <div className="button-box text-align-center has-animation fadeout-element">
        <div className="clapat-button-wrap parallax-wrap hide-ball">
          <div className="clapat-button parallax-element">
            <div className="button-border outline rounded parallax-element-second">
              <Link className="ajax-link" href="/portfolio">
                <span data-hover="See All Works">See All Works</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}