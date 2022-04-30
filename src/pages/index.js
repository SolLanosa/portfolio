import Head from "next/head";
import InicialPage from "components/InicialPage/InicialPage";
import Skills from "components/Skills/Skills";
import Portfolio from "components/Portfolio/Portfolio";
import AboutMe from "components/AboutMe/AboutMe";
import { proyectsData } from "data";
import Contact from "components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`favicons/apple-touch-icon.png`}
        />

        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={`favicons/android-chrome-512x512.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`favicons/android-chrome-192x192.png`}
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`favicons/favicon-32x32.png`}
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`favicons/favicon-16x16.png`}
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={`favicons/favicon.ico`}
        ></link>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content={`favicons/ms-icon-144x144.png`}
        />
        <meta name="theme-color" content="#ffffff" />
        <title>Sol Lanosa - Portfolio</title>

        <meta
          property="og:title"
          content="Sol Lanosa - Portfolio"
          key="title"
        />
        <meta
          name="description"
          content="My name is Sol Lanosa. I'm a Law student and Front-End web developer"
        />
        <meta
          property="og:description"
          content="My name is Sol Lanosa. I'm a Law student and Front-End web developer"
          key="description"
        />
      </Head>
      <div>
        <InicialPage />
        <AboutMe />
        <Portfolio proyectsData={proyectsData} />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
