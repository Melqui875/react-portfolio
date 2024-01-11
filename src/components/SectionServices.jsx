import { ServiceCard } from "./ServiceCard.jsx";
import { services } from "@/constants/constants";

export function SectionServices() {
  return (
    <section>
      <div className="my-20">
        <h3 className="text-3xl py-1 dark:text-white">Servicios</h3>
        <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-400">
          Experiencia en el dinámico mundo de la
          programación, ofrezco servicios especializados que combinan la mejor
          tecnología y prácticas de desarrollo para llevar tus proyectos al
          siguiente nivel.
        </p>
      </div>
      <div className="lg:flex gap-10">
        {services.map((service) => {
          return <ServiceCard key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
}
