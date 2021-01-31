import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import Styles from '../styles/modules/skills.module.scss'

function Skills() {
    return (
        <div className={Styles.skillWrapper} id="skills">
            <h1>Things I do</h1>
            <div className={Styles.skillContainer}>
                <div className={Styles.skillCard}>
                    <div className={Styles.iconWrapper}>
                        <FontAwesomeIcon icon={faCode} />
                    </div>
                    <h3>Front-End</h3>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit unde quas delectus neque nulla a  </p>
                </div>
                <div className={Styles.skillCard}>
                <div className={Styles.iconWrapper}>
                        <FontAwesomeIcon icon={faJs} />
                    </div>
                    <h3>Javascript</h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus quos accusamus ullam  </p>
                </div>
                <div className={Styles.skillCard}>
                <div className={Styles.iconWrapper}>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <h3>React Js</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi nam culpa tempore illum autem </p>
                </div>
                
            </div>
        </div>
    )
}

export default Skills