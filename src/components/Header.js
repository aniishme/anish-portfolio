import React,{useState} from "react"
import { Link } from "gatsby"

import Styles from "../styles/modules/header.module.scss"

function Header() {
    const [collapse, setCollapse] = useState(true)

    const handleNavCollapse= () =>{
        setCollapse(collapse ? false : true)
    }
  return (
    <div className={Styles.navWrapper}>
      <nav className={Styles.navbar}>
        <div className={Styles.logo}>
          <h1>
            <Link to="/">ANISH</Link>
          </h1>
        </div>
        <div>
          <ul className={`${Styles.navLinks} ${collapse ? '' : Styles.navLinksResponsive}`}>
            <li>
              <Link className={Styles.navItem} to="/">
                intro
              </Link>
            </li>
            <li>
              <Link className={Styles.navItem} to="#skills">
                skills
              </Link>
            </li>
            <li>
              <Link className={Styles.navItem} to="#works">
                works
              </Link>
            </li>
            <li>
              <Link className={Styles.navItem} to="#contact">
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div role="button" className={Styles.burgerMenu} onMouseDown={handleNavCollapse}>
            <div className={Styles.line}></div>
            <div className={Styles.line}></div>
            <div className={Styles.line}></div>

        </div>
      </nav>
    </div>
  )
}

export default Header
