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
    threejs,
    roblox,
    react,
    js,
    blockchain,
    website,
    jumping,
    github,
    meenu,
    narayan,
    amma,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Exordium",
    },
    {
      id: "work",
      title: "Opus",
    },
    {
      id: "contact",
      title: "Contactus",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ROBLOX Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
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
      name: "Three JS",
      icon: threejs,
    },
    /*{
      name: "git",
      icon: git,
    }, */
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Roblox Developer",
      company_name: "ROBLOX",
      icon: roblox,
      iconBg: "#B19CD9",
      date: "December 2019 - Present",
      points: [
        "Developing and creating games on ROBLOX to provide the user base fun experiences",
        "Collaborating with other developers including designers, modelers, and other developers to create high-quality experiences.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Debugging and using plugins for a smoother and more immersive experience.",
      ],
    },
    {
      title: "React Developer",
      company_name: "React",
      icon: react,
      iconBg: "#FAD1D1",
      date: "Jun 2024 - Present",
      points: [
        "Developing web applications using React.js and other related technologies.",
        "Using React.js to make responsive, smooth, and appealing wesbites that are user friendly",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Backend Databases",
      company_name: "MongoDB",
      icon: mongodb,
      iconBg: "#B19CD9",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining  the back end of web applications using MongoDB and Node.js.",
        "Creating Sign-Up forms, User Databases, and Scalability",
        "Implementing responsive database and ensuring compatibility to all users.",
      ],
    },
    {
      title: "UI/UX",
      company_name: "Figma",
      icon: figma,
      iconBg: "#FAD1D1",
      date: "Jan 2024 - Present",
      points: [
        "Developing and creating nice and simple UI's that are visually pleasing.",
        "Dveloping UI's, Three.js components, and using color theory to bring websites to life.",
        "Creating collaborations and prototypes with other people to make a finalized design.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a ROBLOX game so fun and amazing.",
      name: "Meenu",
      designation: "Little sister",
      company: "My Family",
      image: meenu,
    },
    {
      testimonial:
        "Wow this website looks really good. Narayan is such a good developer.",
      name: "Narayan",
      designation: "Creator",
      company: "This website",
      image: narayan,
    },
    {
      testimonial:
        "After Narayan made that Crypto backend, dogecoin grew 1000% making me a billionaire over night!",
      name: "Amma",
      designation: "CEO",
      company: "My family",
      image: amma,
    },
  ];
  
  const projects = [
    {
      name: "Jumping Simulator",
      description:
        "Module based platform that allows easy datastorage, user compatibility, and a module based frame that allows to be easily expanded lets for a nice central system where everything's core is located.",
      tags: [
        {
          name: "LUAU",
          color: "blue-text-gradient",
        },
      ],
      image: jumping,
      icon: roblox,
      source_code_link: "https://www.roblox.com/games/12719650590/x2-Event-Jumping-Simulator",
    },
    {
      name: "3D Website",
      description:
        "Web application that uses three.js, react and tailwind to bring features to life and lets users interact with various different items located throughout the website. The react.js allows for smooth animations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: website,
      icon: github,
      source_code_link: "/",
    },
    {
      name: "Crypto Backend",
      description:
        "A comprehensive blockhain backend that uses crypto.js to let users mine and uses SHA256 endcoding as well as Elliptic.js to create secure keys and also has mining rewards.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "Crypto.js",
          color: "green-text-gradient",
        },
        {
          name: "Elliptic",
          color: "pink-text-gradient",
        },
      ],
      image: blockchain,
      icon: github,
      source_code_link: "https://github.com/",
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };