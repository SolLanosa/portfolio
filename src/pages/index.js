import Head from "next/head";
import InicialPage from "components/InicialPage/InicialPage";
import Skills from "components/Skills/Skills";
import Portfolio from "components/Portfolio/Portfolio";
import AboutMe from "components/AboutMe/AboutMe";
import { proyectsData } from "data";
import Contact from "components/Contact/Contact";

export default function Home() {
  return (
    <div>
      <InicialPage />
      <AboutMe />
      <Portfolio proyectsData={proyectsData} />
      <Skills />
      <Contact />
    </div>
  );
}
