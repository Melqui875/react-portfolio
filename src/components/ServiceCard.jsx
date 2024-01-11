import Image from "next/image";
import { Technologies } from "./Technologies";

export function ServiceCard({ service }) {
  return (
    <div className="flex flex-col justify-center items-center text-center shadow-xl p-10 rounded-xl my-10 text-md py-2 leading-7 dark:text-gray-200">
      <Image
        src={service.img.src}
        alt={service.img.alt}
        width={100}
        height={100}
      />
      <h3 className="text-lg font-medium pt-8 pb-2">{service.title}</h3>
      <p className="py-2">{service.context}</p>
      <h4 className="py-4 text-indigo-700">Herramientas</h4>
      {service.technologies.map((tag, index) => {
        return <Technologies key={index} tag={tag}/>;
      })}
    </div>
  );
}
