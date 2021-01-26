import React from 'react'

import '../styles/index.scss'
import Styles from '../styles/modules/layout.module.scss'

import Header from './Header'
import Footer from './Footer'




function Layout(props) {
    return (
        
        <div className={Styles.container}>
            <Header/>
                {props.children}
            <Footer/>
        </div>
        
    )
}

export default Layout
