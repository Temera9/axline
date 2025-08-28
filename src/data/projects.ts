export interface ProjectData {
  slug: string;
  title: string;
  heroImage: string;
  description: string;
  date: string;
  role: string;
  websiteUrl?: string;
  challenge: string;
  research: string;
  solution: string;
  images: {
    url: string;
    caption?: string;
  }[];
  nextProject?: {
    slug: string;
    title: string;
    image: string;
    color: string;
  };
}

export const projectsData: Record<string, ProjectData> = {
  "white-liners": {
    slug: "white-liners",
    title: "White Liners",
    heroImage: "/images/01hero.jpg",
    description: "As you navigate through the projects, you'll discover a harmonious blend of creativity and functionality, seamlessly brought to life by the dynamic capabilities of our shortcodes. Each shortcode serves as a building block, unlocking a world of possibilities for expressing your ideas and presenting your content in ways that are both visually stunning and highly engaging.",
    date: "January 2024",
    role: "Art Direction, Web Design, Production",
    websiteUrl: "https://www.behance.net/gallery/188644629/Yioiy",
    challenge: "DEVELOPING ONLINE PRESENCES WHERE THE SOPHISTICATION OF VISUAL DESIGN MEETS THE CALCULATED SCIENCE OF PRODUCT SELLING.",
    research: "DESIGNING ONLINE PLATFORMS WHERE THE ARTISTRY OF VISUAL APPEAL CONVERGES WITH THE STRATEGY OF PRODUCT MARKETABILITY.",
    solution: "CRAFTING WEBSITES WHERE THE ELEGANCE OF DESIGN INTERSECTS WITH THE SCIENCE OF SELLING PRODUCTS.",
    images: [
      { url: "/images/projects/liners01.jpg", caption: "Image Caption Here" },
      { url: "/images/projects/liners02.jpg", caption: "Image Caption Here" },
      { url: "/images/projects/liners03.jpg" },
      { url: "/images/projects/liners04.jpg" },
      { url: "/images/projects/liners05.jpg" },
      { url: "/images/projects/liners06.jpg" },
    ],
    nextProject: {
      slug: "green-audio",
      title: "Green Audio",
      image: "/images/02hero.jpg",
      color: "#963a8d"
    }
  },
  "green-audio": {
    slug: "green-audio",
    title: "Green Audio",
    heroImage: "/images/02hero.jpg",
    description: "A harmonious blend of audio technology and sustainable design, creating innovative solutions for modern audio experiences.",
    date: "February 2024",
    role: "Product Design, Branding, User Experience",
    challenge: "CREATING SUSTAINABLE AUDIO SOLUTIONS WITHOUT COMPROMISING ON QUALITY AND PERFORMANCE.",
    research: "EXPLORING ECO-FRIENDLY MATERIALS AND TECHNOLOGIES FOR NEXT-GENERATION AUDIO PRODUCTS.",
    solution: "DEVELOPING A LINE OF PREMIUM AUDIO PRODUCTS USING RECYCLED MATERIALS AND RENEWABLE ENERGY.",
    images: [
      { url: "/images/02hero.jpg", caption: "Hero Image" },
    ],
    nextProject: {
      slug: "nanotech",
      title: "Nanotech",
      image: "/images/03hero.jpg",
      color: "#2c5aa0"
    }
  },
  "nanotech": {
    slug: "nanotech", 
    title: "Nanotech",
    heroImage: "/images/03hero.jpg",
    description: "Cutting-edge nanotechnology solutions that bridge the gap between science and practical applications.",
    date: "March 2024",
    role: "Research, Brand Identity, Digital Strategy",
    challenge: "MAKING COMPLEX NANOTECHNOLOGY ACCESSIBLE AND UNDERSTANDABLE TO MAINSTREAM AUDIENCES.",
    research: "STUDYING MARKET NEEDS AND TECHNOLOGICAL POSSIBILITIES IN THE NANOTECHNOLOGY SECTOR.",
    solution: "CREATING A COMPREHENSIVE BRAND IDENTITY THAT SIMPLIFIES COMPLEX SCIENCE INTO DIGESTIBLE CONCEPTS.",
    images: [
      { url: "/images/03hero.jpg", caption: "Nanotech Innovation" },
    ],
    nextProject: {
      slug: "cool-dude",
      title: "Cool Dude",
      image: "/images/04hero.jpg",
      color: "#c44569"
    }
  },
  "cool-dude": {
    slug: "cool-dude",
    title: "Cool Dude",
    heroImage: "/images/04hero.jpg",
    description: "A vibrant video production project showcasing creative storytelling and innovative visual effects.",
    date: "April 2024", 
    role: "Video Production, Creative Direction, Post-Production",
    challenge: "CREATING ENGAGING VIDEO CONTENT THAT RESONATES WITH YOUNG AUDIENCES ACROSS MULTIPLE PLATFORMS.",
    research: "ANALYZING TRENDING VIDEO FORMATS AND SOCIAL MEDIA CONSUMPTION PATTERNS.",
    solution: "PRODUCING HIGH-ENERGY, VISUALLY STRIKING CONTENT OPTIMIZED FOR DIGITAL PLATFORMS.",
    images: [
      { url: "/images/04hero.jpg", caption: "Cool Dude Production" },
    ],
    nextProject: {
      slug: "sphere-digital",
      title: "Sphere Digital",
      image: "/images/05hero.jpg",
      color: "#6c5ce7"
    }
  },
  "sphere-digital": {
    slug: "sphere-digital",
    title: "Sphere Digital",
    heroImage: "/images/05hero.jpg",
    description: "Digital transformation solutions that create immersive experiences through innovative technology and design.",
    date: "May 2024",
    role: "Digital Strategy, UI/UX Design, Development",
    challenge: "TRANSFORMING TRADITIONAL BUSINESS MODELS INTO DIGITAL-FIRST EXPERIENCES.",
    research: "INVESTIGATING EMERGING DIGITAL TECHNOLOGIES AND USER EXPERIENCE TRENDS.",
    solution: "DEVELOPING COMPREHENSIVE DIGITAL ECOSYSTEMS THAT ENHANCE USER ENGAGEMENT AND BUSINESS OUTCOMES.",
    images: [
      { url: "/images/05hero.jpg", caption: "Sphere Digital Innovation" },
    ],
    nextProject: {
      slug: "white-liners",
      title: "White Liners", 
      image: "/images/01hero.jpg",
      color: "#8c6144"
    }
  }
};
