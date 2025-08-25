// src/components/ContactInfo.tsx
'use client'

const contactData = [
  {
    icon: "fa-paper-plane",
    title: "office@montoya.com",
    subtitle: "Email",
    link: "mailto:office@montoya.com",
    delay: "100"
  },
  {
    icon: "fa-map-marker",
    title: "35 M Str, New York, USA",
    subtitle: "Address",
    delay: "200"
  },
  {
    icon: "fa-phone",
    title: "0040 (7763) 574-8901",
    subtitle: "Phone",
    delay: "300"
  }
]

export default function ContactInfo() {
  return (
    <div className="content-row dark-section text-align-center" data-bgcolor="#0c0c0c">
      
      {contactData.map((item, index) => (
        <div 
          key={index}
          className={`one_third has-animation ${index === contactData.length - 1 ? 'last' : ''}`}
          data-delay={item.delay}
        >
          <div className="box-icon-wrapper block-boxes">
            <div className="box-icon">
              <i className={`fa ${item.icon} fa-2x`} aria-hidden="true"></i>
            </div>
            <div className="box-icon-content">
              <h6 className="no-margins">
                {item.link ? (
                  <a href={item.link} className="link">
                    <span>{item.title}</span>
                  </a>
                ) : (
                  item.title
                )}
              </h6>
              <p>{item.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      
    </div>
  )
}