// src/components/PageNavigation.tsx
'use client'

import Link from 'next/link'

export default function PageNavigation() {
  return (
    <div id="page-nav">
      <div className="page-nav-wrap">
        <div className="page-nav-caption content-full-width text-align-center height-title">
          <div className="inner">
            <div className="next-hero-subtitle caption-timeline">
              <span>EXPLORING OUR WORLD OF VISUAL AND INTERACTIVE DESIGN</span>
            </div>
            <Link 
              className="page-title next-ajax-link-page" 
              href="/about"
            >
              <div className="next-hero-title primary-font-title caption-timeline">
                <span>Our Studio</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}