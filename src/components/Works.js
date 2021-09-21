import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons"

import Styles from "../styles/modules/works.module.scss"

function Works() {
  const works = [
    {
      title: "React Todo Application",
      desc:
        "A todo app built in React with context state management and browser local storage.",
      sourceCode:
        "https://github.com/aniishme/react-todo-context-state-management",
      demoLink: "https://anishs-react-todo.netlify.app/",
      image: "/favicon.png",
    },
    {
      title: "React Quote Generator",
      desc:
        "Generate random quote using random quote api. I learned to work with fetching api data in ReactJS while creating this site.",
      sourceCode: "https://github.com/aniishme/react-quote-generator",
      demoLink: "https://randomquotegeneretor.netlify.app/",
      image: "/favicon.png",
    },
    {
      title: "JS Snake Game",
      desc:
        "Snake game written in Javascript using Canvas. I learned about Object Oriented Programming in JS while coding this.",
      sourceCode: "https://github.com/aniishme/JS-Snake-Game",
      demoLink: "https://jscanvas-snakegame.netlify.app/",
      image: "/favicon.png",
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
