import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Freelancely,
  AdSnap,
  HandGesture, 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "UI Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  
  {
    title: "Frontend Developer",
    company_name: "Lunewise Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2025 - July 2025",
    points: [
      "Improved LearnWell Career Platform design using React.js, Node.js, Express.js, and Tailwind CSS",
      "Led React.js web app redesign, boosting responsiveness and retention.",
      "Developed MindMend AI mental health app frontend in React Native, enabling scalable, cross-platform UI for Android and iOS.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Freelancely",
    description:
      "Web App Full-stack app with React + Tailwind, Supabase backend, and real-time task sharing. Includes CRUD, row-level security, image uploads, and live data sync. UI built with 21st.dev for modern responsiveness",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Freelancely,
    source_code_link: "https://github.com/Joyslin-2006/Freelancely.git",
  },
  {
    name: "Snap Studio",
    description:
      "SaaS-style app built with Streamlit and Python, integrating Bria AI APIs for advanced imagegeneration and editing. Implemented structured architecture with components, services, and utils, along with error handling, and logging",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
    ],
    image: AdSnap,
    source_code_link: "https://github.com/Joyslin-2006/adsnap-studio.git",
  },
  {
    name: "Gesture Guide Glow",
    description:
      "Full-stack, self-made website built with React and deployed on Vercel. Showcases a hand gesture recognition project using MediaPipe and Python. Focused on explaining the Python code and designed to be beginner-friendly",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MediaPipe",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: HandGesture,
    source_code_link: "https://github.com/Joyslin-2006/gesture-guide-glow.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
