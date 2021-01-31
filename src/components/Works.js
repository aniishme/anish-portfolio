import React from "react"

import Styles from "../styles/modules/works.module.scss"

function Works() {
  const works = [
    {
      title: "First Project",
      desc: "This is my first project done in react js and next js",
      sourceCode: null,
      demoLink: null,
      image: "/favicon.ico",
    },
    {
      title: "Second Project",
      desc: "This is my Second project done in react js and next js",
      sourceCode: null,
      demoLink: null,
      image: "/favicon.ico",
    },
    {
      title: "First Projectsad",
      desc: "This is my first project done in react js and next js",
      sourceCode: null,
      demoLink: null,
      image: "/favicon.ico",
    },
    {
      title: "Second Projectsad",
      desc: "This is my Second project done in react js and next js",
      sourceCode: null,
      demoLink: null,
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
