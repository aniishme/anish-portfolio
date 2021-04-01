import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons"

import Styles from "../styles/modules/works.module.scss"

function Works() {
  const works = [
    {
      title: "React Quote Generator",
      desc: "Generate random quote using random quote api.",
      sourceCode: "https://github.com/aniishme/react-quote-generator",
      demoLink: "https://randomquotegeneretor.netlify.app/",
      image: "/favicon.ico",
    },
    {
      title: "JS Snake Game",
      desc: "Snake game written in Javascript using Canvas.",
      sourceCode: "https://github.com/aniishme/JS-Snake-Game",
      demoLink: "https://jscanvas-snakegame.netlify.app/",
      image: "/favicon.ico",
    },
  ]
  return (
    <div className={Styles.workWrapper} id="works">
      <h1>My Projects</h1>
      <div className={Styles.workContainer}>
        {works.map(work => {
          return (
            <div className={Styles.workCard} key={work.title}>
              <div className={Styles.workContent}>
                <h3>{work.title}</h3>
                <p>{work.desc}</p>
                <div className={Styles.cardIcons}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={work.demoLink}
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a
                    href={work.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                </div>
              </div>
              <div className={Styles.image}>
                <img src={work.image} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Works
