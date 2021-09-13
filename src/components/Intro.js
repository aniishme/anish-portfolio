import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import Person from "../../static/person.jpg"

import Styles from "../styles/modules/intro.module.scss"

// import Typical from 'react-typical'

function Intro() {
  return (
    <div className={Styles.introWrapper} id="intro">
      <div className={Styles.bgImage}></div>
      <div className={Styles.introContent}>
        <div className={Styles.typeWrapper}>
          <p>Hey, I'm</p>
          <span>ANISH SHARMA</span>
          <p>FRONT-END DEVELOPER</p>
          {Styles && (
            <span className={Styles.socialIcons}>
              <a
                href="https://github.com/aniishme"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharmaanish023/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.instagram.com/aniish.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </span>
          )}
        </div>
        <div className={Styles.infoWrapper}>
          <img src={Person} alt="info" />
        </div>
      </div>
    </div>
  )
}

export default Intro
