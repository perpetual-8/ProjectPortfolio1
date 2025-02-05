import { Slide, ToastOptions } from "react-toastify";
import { TCareer, TProjects } from "./types";
import { TECHNOLOGIES } from "./technology-const";

export const NAVBAR_OPTIONS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Career",
    href: "/career",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const CAREER: TCareer[] = [
  {
    role: "Frontend Software Engineer",
    company: "Topdot",
    companyLink: "https://topdot.pk/",
    duration: "2024-Present",
    details:
      "As a Frontend Software Engineer, I specialize in crafting responsive and visually appealing user interfaces using modern frameworks like Bootstrap, SCSS, and Tailwind CSS. I integrate seamless animations powered by GSAP to enhance user engagement and interaction. By optimizing frontend performance, I have successfully reduced page load times, improving the overall user experience. My work focuses on building fast, efficient, and accessible applications while adhering to industry best practices and delivering scalable solutions.",
  },
  {
    role: "Associate Software Engineer",
    company: "AbsoluIT",
    companyLink: "https://absoluit.com/",
    duration: "2023-2024",
    details:
      "I've crafted and managed over 4+ high-performing, scalable applications employing diverse programming languages. Collaborated closely with cross-functional teams to grasp business needs and convert them into technical solutions. Proficiently utilized distributed databases such as MySQL, PostgreSQL, and MongoDB. Additionally, I've taken on the role of mentoring junior engineers, aiding in their technical and professional development.",
  }, 
  {
    role: "Contractor",
    company: "Self-Employed - Freelance",
    companyLink: "#",
    isNoLink: true,
    duration: "2020-2022",
    details:
      "I Developed and maintained microservices architecture for various web applications, leveraging technologies such as React.js, Node.js, Express.js, MongoDB, and Docker, reducing development time by 30%.",
  },
];

export const SOCIALS = [
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/hamzabhutta/",
    fgColor: "#007fb1",
  },
  {
    label: "github",
    href: "https://github.com/perpetual-8",
    fgColor: "black",
    darkFgColor: "white",
  },
];

export const EMAIL = "hamzaabhutta@gmail.com";

export const defaultProps = {
  motion: {
    initial: { x: -500, opacity: 0.5, scale: 0.5 },
    animate: { x: 0, opacity: 1, scale: 1 },
    transition: { duration: 1 },
  },
};

export const snackbarOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  closeOnClick: true,
  theme: "dark",
  transition: Slide,
};

export const PROJECTS: TProjects[] = [
  {
    imageSrc: "/popscapeshero.png",
    title: "Popscapes",
    url: "https://popscapes.com/",
    technologies: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.NEST,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.SWAGGER,
      TECHNOLOGIES.REDIS,
      TECHNOLOGIES.Azure,
    ],
    description:
      "Popscapes is an eCommerce platform where artists can showcase and sell their art, merchandise, and related products. As the Frontend Engineer, I focused on optimizing the user interface using SCSS, Bootstrap, GSAP, and jQuery to create an aesthetically pleasing and fast-loading experience. My work enhanced the platform’s performance and appeal, ensuring a smooth, engaging shopping experience for users.",
    features: [
      "Smooth User Interactions",
      "Optimized Performance",
      "Responsive Design",
      "Appealing animation work",
    ],
  },
  {
    imageSrc: "/dag.png",
    title: "DAG Architects",
    url: "https://www.dagarchitects.com/",
    technologies: [
      TECHNOLOGIES.FLUTTER,
      TECHNOLOGIES.CRYSTAL,
      TECHNOLOGIES.STRAPI,
      TECHNOLOGIES.SWAGGER,
      TECHNOLOGIES.AWS,
    ],
    description:
      "Designed with precision and elegance, the DAG Architects portfolio website embodies the essence of architectural sophistication through a pixel-perfect, sleek interface. My role as the Frontend Engineer was to craft an immersive user experience with attention to every detail, ensuring smooth navigation, aesthetic visuals, and a refined layout. The website combines minimalistic design with cutting-edge technology to showcase DAG Architects’ work in the most visually compelling and responsive way, reflecting their architectural expertise and creativity.",
    features: [
      "Minimalist Aesthetic",
      "Fast Load Times",
      "Project Showcase",
      "Responsive Layout",
    ],
  },
  {
    imageSrc: "/gfp.png",
    title: "GodFather's Pizza",
    url: "https://www.godfathers.com/",
    technologies: [
      TECHNOLOGIES.NEXT,
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.TURBO,
      TECHNOLOGIES.TAILWIND,
      TECHNOLOGIES.SWAGGER,
      TECHNOLOGIES.WEBPACK,
      TECHNOLOGIES.AWS,
    ],
    description:
      "The Godfather Pizza website is a dynamic and visually appealing platform designed to elevate the brand’s identity and connect with customers. As the Frontend Engineer, I focused on creating a sleek, modern, and aesthetic experience using captivating animations and smooth transitions. The site reflects the bold and inviting spirit of the Godfather Pizza franchise, blending sophisticated design with intuitive navigation to showcase their delicious offerings, franchise opportunities, and restaurant locations.",
    features: [
      "Engaging Animations",
      "Franchise Information",
      "Menu Showcase",
      "Modern Branding",
      "Location Finder"
    ],
  },
  {
    imageSrc: "/simon.png",
    title: "Simon and Schuster",
    url: "https://www.simonandschuster.com/",
    technologies: [
      TECHNOLOGIES.REACT,
      TECHNOLOGIES.STORYBOOK,
      TECHNOLOGIES.WEBPACK,
      TECHNOLOGIES.HEADLESS_UI,
      TECHNOLOGIES.TAILWIND,
    ],
    description:
      "The Simon & Schuster website is designed to deliver an immersive, visually engaging experience for book lovers, authors, and publishers alike. As the Frontend Engineer, I crafted a sleek, modern interface with a focus on showcasing books, authors, and literary content. The site features dynamic content, smooth animations, and intuitive navigation, all while adhering to a contemporary design that captures the essence of the publishing industry.",
    features: [
      "SSR (Server Side Rendering)",
      "TypeScript based",
      "Focus Interactions",
      "Accessible Components",
      "Override Components Tags",
    ],
  },
   
];
