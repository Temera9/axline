// src/components/SkillsRotator.tsx
'use client'

const skills = [
  "Web Design",
  "Mobile App Development",
  "UI/UX Design",
  "SEO Optimization",
  "Social Media Management",
  "Data Analytics",
  "Content Creation"
]

export default function SkillsRotator() {
  return (
    <div className="content-row full row_padding_left row_padding_right dark-section fadeout-element" data-bgcolor="#0c0c0c">
      <div className="list-rotator-wrapper">
        <div className="list-rotator-title">OUR SKILLS COVER</div>
        <div className="list-rotator-pin">
          <ul className="list-rotator primary-font-title">
            {skills.map((skill, index) => (
              <li key={index} className={index === 0 ? "" : ""}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}