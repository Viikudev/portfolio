"use client";

import Image from "next/image";
import styles from "@/app/page.module.css";
import imgGithubUrl from "@/public/github.svg";
import imgLinkedinUrl from "@/public/linkedin.svg";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";

export default function Home() {
  const handleClick = () => {
    const email = "victoress18@gmail.com";
    navigator.clipboard.writeText(email);
  };
  return (
    <>
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
            <h3 className={styles.position}>Frontend Developer</h3>
            <p className={styles.introduction}>
              Hello there! <span className={styles.bright}>{`I'm`} Victor</span>
              , a passionate{" "}
              <span className={styles.bright}>frontend developer</span> who
              creates <span className={styles.bright}>beautiful</span> and{" "}
              <span className={styles.bright}>interactive</span> user interfaces
              for the comfort of the clients.
            </p>
          </div>

          <nav>
            <ul className={styles.sectionList}>
              <li>
                <a className={styles.link} href="#about">
                  About
                </a>
              </li>
              <li>
                <a className={styles.link} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className={styles.link} href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className={styles.link} href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className={styles.link} href="#education">
                  Education
                </a>
              </li>
              <li>
                <a className={styles.link} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* HERO TABLET */}
          <nav className={styles.navList}>
            <ul className={styles.sectionListTablet}>
              <li>
                <a className={styles.link} href="#about">
                  About
                </a>
              </li>
              <li>
                <a className={styles.link} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className={styles.link} href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className={styles.link} href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className={styles.link} href="#education">
                  Education
                </a>
              </li>
              <li>
                <a className={styles.link} href="#contact">
                  Contact
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
              <h3 className={styles.position}>Frontend Developer</h3>
              <p className={styles.introduction}>
                <span className={styles.bright}>
                  Hello there! {`I'm`} Victor
                </span>
                , a passionate{" "}
                <span className={styles.bright}>frontend developer</span> who
                creates <span className={styles.bright}>beautiful</span> and{" "}
                <span className={styles.bright}>interactive</span> user
                interfaces for the comfort of the clients.
              </p>
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
            <p className={styles.details}>
              Designed by me with <span className={styles.bright}>Miro</span>,
              used <span className={styles.bright}>Next.js</span> framework in
              the development, styled using{" "}
              <span className={styles.bright}>CSS Modules</span> and deployed in{" "}
              <span className={styles.bright}>Vercel</span>. Took inspiration
              from{" "}
              <span className={styles.brittany}>{`Brittany
          Chiang's `}</span>{" "}
              portfolio.
            </p>
          </footer>
        </section>
        <section className={styles.right}>
          <Section title="About" id="about">
            <p
              className={styles.description}
            >{`From childhood to the present day, I have always been passionate about video games. This led me to be constantly close to technology and its workings. 
            
            I witnessed firsthand how technology evolved, and with it, my interest in it grew. When I first interacted with code in college, it didn't capture my attention much. I thought the tasks I was doing weren't that great and didn't have interesting visibility. However, everything changed when I started learning about HTML, CSS, and JavaScript languages. I could create beautiful results with the code I wrote. Since then, I have dedicated myself to writing code to create beautiful and user-friendly interfaces to contribute to the applications that users utilize.`}</p>
          </Section>
          <Section title="Projects" id="projects">
            <ul className={styles.projectList}>
              <ProjectCard
                project="scramblle.png"
                title="Guess the word Game"
                duration="March 2024 - April 2024"
                description="This game shows an unordered word and the player should
                    enter the letters in the correct order to win the game. This
                    game tests the Logical knowledge to build a game from
                    scratch"
                tags={["HTML", "CSS", "Javascript", "Vite"]}
                url="https://victoresamuel.github.io/Guess-the-word-game/"
              />
              <ProjectCard
                project="coffee.png"
                title="Coffee Listing"
                duration="May 2024 - May 2024"
                description="A project created using HTML, CSS, Typescript and ReactJS.
                    It used an API to get the data of coffee items, and built a
                    reusable component that shows every type of coffe in the
                    list with their own properties. The project uses the state
                    management to show the entire list of coffees or only the
                    coffees that are available."
                tags={["HTML", "CSS", "Typescript", "React", "Vite"]}
                url="https://victoresamuel.github.io/Coffee-Listing/"
              />
            </ul>
          </Section>
          <Section title="Experience" id="experience">
            <ul className={styles.experienceList}>
              <ExperienceCard
                experience="ferrominera.jpg"
                title="Intern"
                company="CVG Ferrominera Orinoco C.A. | Full-time"
                duration="June 2023 - September 2023"
                location="Puerto Ordaz, Bolivar State, Venezuela | On-site"
                description="Using tools like Python, SQLite y Tkinter; I built a desktop
                  application with the capacity to migrate data from .txt files
                  to a database, then the user can create tables with the
                  required data retrieved from the database. Using libraries
                  like Matplotlib and numpy, the application has the feature to
                  create graphics according to the data that the users need.
                  This application improved the performance of the operations
                  room workers around a 23% when they are doing tasks related
                  with users data."
                tags={["Python", "SQLite", "Tkinter", "VMware", "Matplotlib"]}
              />
            </ul>
          </Section>
          <Section title="Skills" id="skills">
            <ul className={styles.skillList}>
              <Skill skill="html" name="HTML" />
              <Skill skill="css" name="CSS" />
              <Skill skill="javascript" name="Javascript" />
              <Skill skill="typescript" name="Typescript" />
              <Skill skill="react" name="React.js" />
            </ul>
          </Section>
          <Section title="Education" id="education">
            <EducationCard
              university="Gran Mariscal de Ayacucho Northeast University"
              degree="Engineer's Degree, Systems Engineering"
              duration="February 2019 - June 2024"
            />
          </Section>
          <Section title="Let's Make Something Awesome!" id="contact">
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
        <p className={styles.details}>
          Designed by me with <span className={styles.bright}>Miro</span>, used{" "}
          <span className={styles.bright}>Next.js</span> framework in the
          development, styled using{" "}
          <span className={styles.bright}>CSS Modules</span> and deployed in{" "}
          <span className={styles.bright}>Vercel</span>. Took inspiration from{" "}
          <span className={styles.brittany}>{`Brittany
          Chiang's `}</span>{" "}
          portfolio.
        </p>
      </footer>
    </>
  );
}
