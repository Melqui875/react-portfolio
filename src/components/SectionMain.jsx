import { BsFillMoonStarsFill } from "react-icons/bs";
import deved from "../public/me.png";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

export function SectionMain({ darkMode, setDarkMode }) {
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons dark:text-white">
          {"< "}developedbymelqui{" />"}
        </h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl dark:text-white"
            />
          </li>
        </ul>
      </nav>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-indigo-700 font-medium md:text-6xl">
          Melqui Zelaya
        </h2>
        <h3 className="text-2xl md:text-3xl dark:text-white">
          Desarrollador FullStack
        </h3>
        <p className="text-md py-5 leading-7 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
          Con más de 2 años de experiencia, he liderado el desarrollo de
          proyectos para empresas emergentes, optimizando la experiencia del
          usuario y mejorando la velocidad de carga del sitio web, además he
          llevado a cabo proyectos como desarrollador full-stack desde 0.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700">
        <a href="#">
          <AiFillTwitterCircle />
        </a>
        <a href="https://www.linkedin.com/in/melquicedec-zelaya-7a2461264/" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/Melqui875" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-indigo-700  rounded-full w-60 h-60 mt-20 overflow-hidden md:h-80 md:w-80">
        <Image alt="Me" src={deved} layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}
