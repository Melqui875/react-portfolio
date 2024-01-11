import { Inter } from "next/font/google";
import Head from "next/head";

// Components
import { SectionMain } from "@/components/SectionMain";
import { SectionServices } from "@/components/SectionServices";
import { SectionProjects } from "@/components/SectionProjects";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Melquicedec Zelaya</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-10 lg:px-40 flex justify-center dark:bg-gray-900">
        <div className="max-w-screen-lg flex flex-col">
          <SectionMain darkMode={darkMode} setDarkMode={setDarkMode} />
          <SectionServices />
          <SectionProjects />
        </div>
      </main>
    </div>
  );
}
