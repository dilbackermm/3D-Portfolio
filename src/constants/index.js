import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    bootstrap,
    html,
    css,
    reactjs,
    nextjs,
    tailwind,
    blender,
    illustrator,
    git,
    figma,
    xd,
    photoshop,
    mesoki,
    impel,
    space,
    impelexports,
    jobit,
    imexbulk,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "UI / UX Developer",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Logo Designer",
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
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Adobe XD",
      icon: xd,
    },
   
    {
      name: "Adobe Illustrator",
      icon: illustrator,
    },
    {
      name: "Adobe Photoshop",
      icon: photoshop,
    },
    {
      name: "Blender",
      icon: blender,
    },
   
  ];
  
  const experiences = [
    {
      title: "Android Developer",
      company_name: "SPACE",
      icon: space,
      iconBg: "#000",
      date: "November 2018- November 2019",
      points: [
        "Developing an android application to learn malayalam language for mentally disabled students.",
        "Designed User interface in collaboration with developers for sevaral android applications",
      ],
    },
    {
      title: "Content Designer",
      company_name: "Mesoki Edu Planet",
      icon: mesoki,
      iconBg: "#f7cf00",
      date: "December 2019 - February 2022",
      points: [
        "Designed a visual representation of core topics of higher educational subjects for an educational application",
        "Worked closely with the team to design themes for different subjects for the educational application.",
        
      ],
    },
    {
      title: "Front-end Developer",
      company_name: "Impel Exports",
      icon: impel,
      iconBg: "#E6DEDD",
      date: "June 2022 - Present",
      points: [
        "Designed and developed responsive and visually appealing web applications using HTML5, CSS3, and JavaScript frameworks like React.js.",
        "Utilized CSS frameworks such as Bootstrap and Tailwind CSS to create consistent and responsive layouts across various devices and screen sizes",
        "Created graphical requirements for the website such as illustrations, 3D object models, logo of the company etc.",
        "Implemented version control using Git and GitHub for efficient team collaboration, code reviews, and project management.",
      ],
    },
    
    
  ];
  
 
  const projects = [
    {
      name: "Impel Exoorts",
      description:
        " A website for a bulk packaging manufacturing company, built from scratch using HTML, CSS, JavaScript, and Bootstrap, designed to showcase their products.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: impelexports,
      source_code_link: "https://github.com/",
    },
    {
      name: "UPC",
      description:
        " A company website developed from scratch using the React framework, Next.js, and Tailwind CSS, with animations created using Framer Motion.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "framermotion",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Imex Bulk",
      description:
        " A fully static website for a bulk packaging manufacturing company, designed and developed from scratch using HTML, CSS, JavaScript, and Bootstrap. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: imexbulk,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };