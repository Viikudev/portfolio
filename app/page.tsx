"use client";

import Image from "next/image";
import styles from "@/app/page.module.css";
import imgGithubUrl from "@/public/github.svg";
import imgLinkedinUrl from "@/public/linkedin.svg";
import imgSpain from "@/public/spain.png";
import imgUnitedStates from "@/public/united-states.png";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";

import { translations } from "@/lib/translations";
import { useState } from "react";

type LocaleProps = "en" | "es";

export default function Home() {
  const [language, setLanguage] = useState<LocaleProps>("en");

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLanguage = event.target.value as LocaleProps;
    setLanguage(newLanguage);
  };

  const handleClick = () => {
    const email = "victoress18@gmail.com";
    navigator.clipboard.writeText(email);
  };

  return (
    <>
      <div className={[styles.languageContainer, styles.bright].join(" ")}>
        {language === "es" ? (
          <Image src={imgSpain} alt="Spain Flag" width={40} height={40} />
        ) : (
          <Image
            src={imgUnitedStates}
            alt="United States Flag"
            width={40}
            height={40}
          />
        )}
        <div className={styles.languageOptions}>
          <input
            type="radio"
            name="language"
            value="en"
            id="en"
            onChange={handleLanguageChange}
            checked={language === "en"}
          />
          <label className={styles.englishOption} htmlFor="en">
            English
          </label>
          <input
            type="radio"
            name="language"
            value="es"
            id="es"
            onChange={handleLanguageChange}
            checked={language === "es"}
          />
          <label className={styles.spanishOption} htmlFor="es">
            Español
          </label>
        </div>
      </div>
      <main className={styles.main}>
        <section className={styles.left}>
          {/* HERO DESKTOP */}
          <div className={styles.hero}>
            <Image
              priority
              className={styles.profile}
              src="/profile.jpg"
              width={808}
              height={869}
              alt="Picture of the author"
            />
            <div className={styles.socials}>
              <a href="https://github.com/victoresamuel" target="_blank">
                <div className={styles.githubContainer}>
                  <Image
                    className={styles.github}
                    src={imgGithubUrl}
                    width={50}
                    height={50}
                    alt="Link to github"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/victoresamuel/"
                target="_blank"
              >
                <div className={styles.linkedinContainer}>
                  <Image
                    className={styles.linkedin}
                    src={imgLinkedinUrl}
                    width={50}
                    height={50}
                    alt="Link to linkedin"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className={styles.info}>
            <h1 className={styles.author}>Victor Samuel</h1>
            <h3 className={styles.position}>{translations[language].role}</h3>
            {language === "es" ? (
              <p className={styles.introduction}>
                Hola! Soy <span className={styles.bright}>Victor</span>, un{" "}
                <span className={styles.bright}>desarrollador frontend</span>{" "}
                apasionado que crea interfaces de usuario{" "}
                <span className={styles.bright}>hermosas</span> e{" "}
                <span className={styles.bright}>interactivas</span> para la
                comodidad de los clientes.
              </p>
            ) : (
              <p className={styles.introduction}>
                Hello there!{" "}
                <span className={styles.bright}>{`I'm`} Victor</span>, a
                passionate{" "}
                <span className={styles.bright}>frontend developer</span> who
                creates <span className={styles.bright}>beautiful</span> and{" "}
                <span className={styles.bright}>interactive</span> user
                interfaces for the comfort of the clients.
              </p>
            )}
          </div>

          <nav>
            <ul className={styles.sectionList}>
              <li>
                <a className={styles.link} href="#about">
                  {translations[language].nav.about}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#projects">
                  {translations[language].nav.projects}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#experience">
                  {translations[language].nav.experience}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#skills">
                  {translations[language].nav.skills}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#education">
                  {translations[language].nav.education}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#contact">
                  {translations[language].nav.contact}
                </a>
              </li>
            </ul>
          </nav>

          {/* HERO TABLET */}
          <nav className={styles.navList}>
            <ul className={styles.sectionListTablet}>
              <li>
                <a className={styles.link} href="#about">
                  {translations[language].nav.about}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#projects">
                  {translations[language].nav.projects}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#experience">
                  {translations[language].nav.experience}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#skills">
                  {translations[language].nav.skills}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#education">
                  {translations[language].nav.education}
                </a>
              </li>
              <li>
                <a className={styles.link} href="#contact">
                  {translations[language].nav.contact}
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.heroTablet}>
            <Image
              priority
              className={styles.profile}
              src="/profile.jpg"
              width={808}
              height={869}
              alt="Picture of the author"
            />
            <div className={styles.infoTablet}>
              <h1 className={styles.author}>Victor Samuel</h1>
              <h3 className={styles.position}>{translations[language].role}</h3>
              {language === "es" ? (
                <p className={styles.introduction}>
                  Hola! Soy <span className={styles.bright}>Victor</span>, un{" "}
                  <span className={styles.bright}>desarrollador frontend</span>{" "}
                  apasionado que crea interfaces de usuario{" "}
                  <span className={styles.bright}>hermosas</span> e{" "}
                  <span className={styles.bright}>interactivas</span> para la
                  comodidad de los clientes.
                </p>
              ) : (
                <p className={styles.introduction}>
                  Hello there!{" "}
                  <span className={styles.bright}>{`I'm`} Victor</span>, a
                  passionate{" "}
                  <span className={styles.bright}>frontend developer</span> who
                  creates <span className={styles.bright}>beautiful</span> and{" "}
                  <span className={styles.bright}>interactive</span> user
                  interfaces for the comfort of the clients.
                </p>
              )}
            </div>
          </div>
          <div className={styles.socialsTablet}>
            <a href="https://github.com/victoresamuel" target="_blank">
              <div className={styles.githubContainer}>
                <Image
                  className={styles.github}
                  src={imgGithubUrl}
                  width={50}
                  height={50}
                  alt="Link to github"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/victoresamuel/"
              target="_blank"
            >
              <div className={styles.linkedinContainer}>
                <Image
                  className={styles.linkedin}
                  src={imgLinkedinUrl}
                  width={50}
                  height={50}
                  alt="Link to linkedin"
                />
              </div>
            </a>
          </div>

          <footer className={styles.footer}>
            {language === "es" ? (
              <p className={styles.details}>
                Diseñado por mí con <span className={styles.bright}>Miro</span>,
                utilice el framework{" "}
                <span className={styles.bright}>Next.js</span> en el desarrollo,
                aplique estilos usando{" "}
                <span className={styles.bright}>CSS Modules</span> y lo
                desplegue en <span className={styles.bright}>Vercel</span>. Tomé
                inspiración del portafolio de{" "}
                <span className={styles.brittany}>{`Brittany
          Chiang's `}</span>{" "}
                portfolio.
              </p>
            ) : (
              <p className={styles.details}>
                Designed by me with <span className={styles.bright}>Miro</span>,
                used <span className={styles.bright}>Next.js</span> framework in
                the development, styled using{" "}
                <span className={styles.bright}>CSS Modules</span> and deployed
                in <span className={styles.bright}>Vercel</span>. Took
                inspiration from{" "}
                <span className={styles.brittany}>{`Brittany
          Chiang's `}</span>{" "}
                portfolio.
              </p>
            )}
          </footer>
        </section>
        <section className={styles.right}>
          <Section title={translations[language].about.title} id="about">
            <p className={styles.description}>
              {translations[language].about.content}
            </p>
          </Section>
          <Section title={translations[language].projects.title} id="projects">
            <ul className={styles.projectList}>
              <ProjectCard
                project="scramblle.png"
                title={
                  translations[language].projects.guessTheWordGame.projectTitle
                }
                duration={
                  translations[language].projects.guessTheWordGame.projectDate
                }
                description={
                  translations[language].projects.guessTheWordGame
                    .projectDescription
                }
                tags={["HTML", "CSS", "Javascript", "Vite"]}
                url="https://victoresamuel.github.io/Guess-the-word-game/"
              />
              <ProjectCard
                project="coffee.png"
                title={
                  translations[language].projects.coffeeListing.projectTitle
                }
                duration={
                  translations[language].projects.coffeeListing.projectDate
                }
                description={
                  translations[language].projects.coffeeListing
                    .projectDescription
                }
                tags={["HTML", "CSS", "Typescript", "React", "Vite"]}
                url="https://victoresamuel.github.io/Coffee-Listing/"
              />
            </ul>
          </Section>
          <Section
            title={translations[language].experience.title}
            id="experience"
          >
            <ul className={styles.experienceList}>
              <ExperienceCard
                experience="ferrominera.jpg"
                title={
                  translations[language].experience.ferrominera.ferromineraRole
                }
                company={
                  translations[language].experience.ferrominera
                    .ferromineraCompany
                }
                duration={
                  translations[language].experience.ferrominera.ferromineraDate
                }
                location={
                  translations[language].experience.ferrominera
                    .ferromineraLocation
                }
                description={
                  translations[language].experience.ferrominera
                    .ferromineraDescription
                }
                tags={["HTML", "CSS", "Typescript", "React", "Vite"]}
              />
            </ul>
          </Section>

          <Section title={translations[language].skills.title} id="skills">
            <ul className={styles.skillList}>
              <Skill skill="html" name="HTML" />
              <Skill skill="css" name="CSS" />
              <Skill skill="javascript" name="Javascript" />
              <Skill skill="typescript" name="Typescript" />
              <Skill skill="react" name="React.js" />
            </ul>
          </Section>
          <Section
            title={translations[language].education.title}
            id="education"
          >
            <EducationCard
              university={translations[language].education.university}
              degree={translations[language].education.degree}
              duration={translations[language].education.date}
            />
          </Section>
          <Section
            title={translations[language].callToAction.title}
            id="contact"
          >
            <ul className={styles.contactList}>
              <div className={styles.socialsContainer}>
                <Contact
                  contact="linkedin"
                  name="Linkedin"
                  user="victoresamuel"
                  action="redirect"
                  url="https://www.linkedin.com/in/victoresamuel/"
                />
                <Contact
                  contact="github"
                  name="Github"
                  user="victoresamuel"
                  action="redirect"
                  url="https://github.com/victoresamuel"
                />
              </div>
              <div className={styles.email}>
                <Contact
                  contact="email"
                  name="victoress18@gmail.com"
                  action="copy"
                  onClick={handleClick}
                />
                <p className={styles.copied}>Copied to clipboard!</p>
              </div>
            </ul>
          </Section>
        </section>
      </main>
      <footer className={styles.footerTablet}>
        {language === "es" ? (
          <p className={styles.details}>
            Diseñado por mí con <span className={styles.bright}>Miro</span>,
            utilice el framework <span className={styles.bright}>Next.js</span>{" "}
            en el desarrollo, aplique estilos usando{" "}
            <span className={styles.bright}>CSS Modules</span> y lo desplegue en{" "}
            <span className={styles.bright}>Vercel</span>. Tomé inspiración del
            portafolio de{" "}
            <span className={styles.brittany}>{`Brittany Chiang's `}</span>
          </p>
        ) : (
          <p className={styles.details}>
            Designed by me with <span className={styles.bright}>Miro</span>,
            used <span className={styles.bright}>Next.js</span> framework in the
            development, styled using{" "}
            <span className={styles.bright}>CSS Modules</span> and deployed in{" "}
            <span className={styles.bright}>Vercel</span>. Took inspiration from{" "}
            <span className={styles.brittany}>{`Brittany Chiang's `}</span>
            portfolio.
          </p>
        )}
      </footer>
    </>
  );
}
