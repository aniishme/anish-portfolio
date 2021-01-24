import React from 'react'

import '../styles/index.scss'

import Header from './Header'
import Footer from './Footer'


import Styles from '../styles/modules/layout.module.scss'

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
