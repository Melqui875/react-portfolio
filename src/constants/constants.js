import design from "@/public/designIco.png";
import code from "@/public/backendIco.png";
import db from "@/public/dbIco.png";
import gift from "@/public/gift.png";
import appContable from "@/public/appcontable.png";

export const services = [
  {
    id: 1,
    title: "Hermosos diseños",
    context: "Creando hermosos diseños acoplados a la necesidad del cliente.",
    technologies: ["Tailwind", "React"],
    img: {
      src: design,
      alt: "Design Icon",
    },
  },
  {
    id: 2,
    title: "Backend",
    context: "Creando hermosos diseños acoplados a la necesidad del cliente.",
    technologies: ["Node.js", "Express.js"],
    img: {
      src: code,
      alt: "Backend Icon",
    },
  },
  {
    id: 3,
    title: "Bases de datos",
    context: "Creando hermosos diseños acoplados a la necesidad del cliente.",
    technologies: ["MongoDB", "MySql"],
    img: {
      src: db,
      alt: "DataBase Icon",
    },
  },
];

export const projects = [
  {
    id: 1,
    name: "Gift Seacrh",
    description:
      "Desarrollo de interfaz manipulando API de GIPHY, esta app se llevó a cabo para la práctica front-end con React",
    img: {
      src: gift,
      alt: "GiftSearchApp",
    },
    link: "https://giftsbymelqui.vercel.app/",
    github: "https://github.com/Melqui875/GiftSearch",
    bgColor: "bg-indigo-500",
    textColor: "text-white",
  },
  {
    id: 2,
    name: "Sistema de control contable",
    description:
      "Desarrollo full-stack de todo un sistema de control contable, a la medida, este proyecto se llevó a cabo en mis años de trabajo para la empresa AIDCLIP",
    img: {
      src: appContable,
      alt: "AppContable",
    },
    link: "",
    github: "https://github.com/Melqui875",
    bgColor: "bg-indigo-500",
    textColor: "text-white",
  },
];
