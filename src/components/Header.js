import React from 'react'
import {Link} from 'gatsby'

import Styles from '../styles/modules/header.module.scss'

function Header() {

    
    return (

        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <h1>ANISH</h1>
            </div>
            <div>
                <ul className={Styles.navLinks}>
                    <li><Link className={Styles.navItem} activeClassName={Styles.activeNavItem} to="/">intro</Link></li>
                    <li><Link className={Styles.navItem} to="#skills">skills</Link></li>
                    <li><Link className={Styles.navItem} to="#works">works</Link></li>
                    <li><Link className={Styles.navItem} to="#contact">contact</Link></li>
                </ul>
            </div>
        </nav>
    
    )
}

export default Header
