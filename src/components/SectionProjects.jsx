import { ProjectCard } from "./ProjectCard";
import { projects } from "@/constants/constants.js";
export function SectionProjects() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Proyectos</h3>
        <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-400">
          A lo largo de mi carrera como desarrollador, he tenido la oportunidad
          de trabajar en una variedad de proyectos desafiantes y enriquecedores.
          Cada uno de estos proyectos no solo ha contribuido a mi crecimiento
          profesional, sino que también ha aportado valor significativo a mis
          clientes o crecimiento empresarial.
        </p>
      </div>
      <div className="grid place-items-center gap-4 transition-all md:grid-cols-2 lg:px-0">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
}
