import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { useRef } from "react";
import { handleMouseLeave, handleMouseMove } from "@/logic/logic.js";
export function ProjectCard({ project }) {
  const ref = useRef(null);

  return (
    <article
      className={
        "flex flex-col justify-center items-center gap-4 p-8 h-full rounded-xl animate-scroll shadow-xl"
      }
    >
      <header className="flex items-center gap-2 justify-between w-full">
        <h3 className={`text-2xl font-semibold text-black dark:text-white`}>
          {project.name}
        </h3>
      </header>
      <p className={`text-wrap-balance text-black dark:text-gray-400`}>
        {project.description}
      </p>
      <a href={project.link} target="_blank" rel="noreferrer">
        <Image
          ref={ref}
          onMouseMove={(e) => handleMouseMove(e, ref.current)}
          onMouseLeave={() => handleMouseLeave(ref.current)}
          loading="lazy"
          className="rounded-lg w-full hover:cursor-pointer hover:shadow-3xl"
          src={project.img.src}
          alt={project.img.alt}
        />
      </a>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700">
        <a href={project.github} target="_blank" rel="noreferrer">
          <AiFillGithub className="cursor-pointer" />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
