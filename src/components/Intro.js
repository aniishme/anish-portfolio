import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


import Styles from '../styles/modules/intro.module.scss'

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
                    <span className={Styles.socialIcons}>
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </span>
                </div>
                <div className={Styles.infoWrapper}>
                            {/* <span>Technologies:</span>
                            <p>HTML</p>
                            <p>JS</p>
                            <p>React Js</p>
                            <p>Gatsby</p> */}
                    
                   <img src="/person.jpg" alt="info"/>         
                </div>
                
            
            </div>
        </div>
    )
}

export default Intro
