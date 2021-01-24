import React from 'react'

import Styles from '../styles/modules/intro.module.scss'

// import Typical from 'react-typical'

function Intro() {

    
      
    return (
        <div className={Styles.introWrapper}>
            <div className={Styles.bgImage}></div>
            <div className={Styles.introContent}>
                <div className={Styles.typeWrapper}>
                    <p>Hey, I'm</p>
                    <span>ANISH SHARMA</span>
                    <p>FRONT-END DEVELOPER</p>
                </div>
                <div className={Styles.infoWrapper}>
                            <span>Technologies:</span>
                            <p>HTML</p>
                            <p>JS</p>
                            <p>React Js</p>
                            <p>Gatsby</p>
                            
                </div>
                
            
            </div>
        </div>
    )
}

export default Intro
