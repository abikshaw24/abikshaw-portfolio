
import portfolio from "./assets/images/projects/portfolio.png";
import farm from "./assets/images/projects/farm.png";
import business from "./assets/images/projects/business.png";
import grocery from "./assets/images/projects/grocery.png"
export const projects = [
  {
    id: 1,
    title: "Grocery Shop App",
    image: grocery,
    description:
      "A full-stack MERN grocery shopping application with product management, shopping cart, billing system, customer registration, and MongoDB integration.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abikshaw24/grocery-shop-app",
   
  },
  {
    id: 2,
    title: "Personal Portfolio",
    image: portfolio,
    description:
      "A modern responsive portfolio website featuring glassmorphism design, layered wave animations, and an elegant user interface built with React.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "http://github.com/abikshaw24/abikshaw-portfolio",
    
  },
  {
    id: 3,
    title: "Farm Organic Store",
    image: farm,
    description:
      "A responsive organic e-commerce website with a premium green-themed interface, product categories, shopping experience, and modern UI design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap","Mongodb"],
    github: "http://github.com/abikshaw24/FARM-STORE",
    
  },
  {
    id: 4,
    title: "The Business Builders ",
    image: business,
    description:
      "A professional business management dashboard with analytics, customer management, product tracking, and responsive admin interface.",
    tech: ["Bootstrap", "JavaScript", "HTML","CSS"],
    github: "http://github.com/abikshaw24/business-builders",
   
  },
];