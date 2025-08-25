// src/app/page.tsx

import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MagicCursor from "./components/MagicCursor";
import PageNavigation from "./components/PageNavigation";
import Preloader from "./components/Preloader";
import PortfolioGallery from "./components/ProtfolioGalley";
import SkillsRotator from "./components/SkillsRotator";


export default function HomePage() {
  return (
    <main>
      <Preloader />
      
      <div className="cd-index cd-main-content">
        <div id="clapat-page-content" className="light-content" data-bgcolor="#0c0c0c">
          
          <Header />
          
          <div id="content-scroll">
            <div id="main">
              
              <Hero />
              
              <div id="main-content">
                <div id="main-page-content" className="content-full-width">
                  
                  <PortfolioGallery />
                  
                  <SkillsRotator />
                  
                  <ContactInfo />
                  
                </div>
                
                <PageNavigation />
                
              </div>
              
            </div>
          </div>
          
          <Footer />
          
        </div>
      </div>
      
      <MagicCursor />
      
      <div className="cd-cover-layer"></div>
      <div id="clone-image">
        <div className="hero-translate"></div>
      </div>
      <div id="rotate-device"></div>
      <div id="app"></div>
      
      {/* Scripts globaux chargés depuis layout */}
      
    </main>
  )
}