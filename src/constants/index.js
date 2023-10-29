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
  HPCAI2021,
  HPCAI2022,
  AUCC,
  POSTER,
  MODDANG,
  ROTARY,
} from "../assets";


const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "The 5th APAC HPC-AI Competition 2022",
    company_name: "Best perfoemance award, 3rd Place",
    images: HPCAI2022,
    iconBg: "RED",
    date: "May 2022 - April 2023",
    points: [
      "This competition is performance of the supercomputer. We tuning parameters to find the probability of a parameter and make a presentation. It's a competition in many countries in APAC",
    ],
  },
  {
    title: "A Smart Monitoring Dashboard for IoTs Irrigation Devices of the Khon Kaen Field Crops Research Center",
    company_name: "",
    images: POSTER,
    iconBg: "RED",
    date: "May 2022 - April 2023",
    points: [
      "Develop a system for displaying status and reporting intelligent results of water distribution boxes for agriculture form of a web application to organize data and create a central control point for researchers to oversee the water supply system.",
    ],
  },
  {
    title: "The 4th APAC HPC-AI Competition 2021",
    company_name: "3rd Place",
    images: HPCAI2021,
    iconBg: "RED",
    date: "May 2021 - April 2022",
    points: ["continued support of NSCC Singapore, student competitors were provided with hands-on access to the Singapore-based advanced supercomputing resources. Teams were challenged with mastering one HPC task (GROMACS) and one AI task (DLRM), the same complex HPC and AI workloads that are integral to today’s major applications."
    ],
  },
  {
    title: "The 9th Asia Undergraduate Conference on Computing : AUCC 2021",
    company_name: "Good Award",
    images: AUCC,
    iconBg: "RED",
    date: "Jan 2021 - April 2021",
    points: [
      "This competition for interesting research. We have developed the WUSY : appointment applications. We got a good award",
      
    ],
  },
  {
    title: "MODDANG : Boot Camp, Real-World Data Science Challenges, 2020",
    company_name: "",
    images: MODDANG,
    iconBg: "RED",
    date: "May 2020",
    points: [
      "This boot camp teach about big data for analysis and exploitation for business. or artificial intelligence"
    ],
  },

  {
    title: "Rotary Youth Leadership Awards 2017",
    company_name: "Rotary District 3350",
    images: ROTARY,
    iconBg: "RED",
    date: "June 2017",
    points: [
      "Rotary Youth Leadership Awards is for local youth to develop leadership skills. Learn to live together Sharing with others Add new experiences and self-help Supported by Rotary 3350"
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
