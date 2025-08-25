// src/components/Footer.tsx
'use client'

const socialLinks = [
  { name: "Db", url: "https://www.dribbble.com/clapat" },
  { name: "Tw", url: "https://www.twitter.com/clapatdesign" },
  { name: "Be", url: "https://www.behance.com/clapat" },
  { name: "Fb", url: "https://www.facebook.com/clapat.ro" },
  { name: "In", url: "https://www.instagram.com/clapat.themes/" }
]

export default function Footer() {
  return (
    <footer className="hidden">
      <div id="footer-container">
        
        <div id="backtotop" className="button-wrap left">
          <div className="icon-wrap parallax-wrap">
            <div className="button-icon parallax-element">
              <i className="fa-solid fa-angle-up"></i>
            </div>
          </div>
          <div className="button-text sticky left">
            <span data-hover="Back Top">Back Top</span>
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="copyright">
            2024 © <a className="link" target="_blank" href="https://www.clapat.com/">ClaPat</a>. All rights reserved.
          </div>
        </div>
        
        <div className="socials-wrap">
          <div className="socials-icon">
            <i className="fa-solid fa-share-nodes"></i>
          </div>
          <div className="socials-text">Follow Us</div>
          <ul className="socials">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <span className="parallax-wrap">
                  <a 
                    className="parallax-element" 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </footer>
  )
}