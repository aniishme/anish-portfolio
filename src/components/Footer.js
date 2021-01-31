import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

import Styles from "../styles/modules/footer.module.scss"
function Footer() {
  return (
    <div className={Styles.footerWrapper}>
      <div className={Styles.footer}>
        <h3>ANISH</h3>
        <p>
          made with <FontAwesomeIcon icon={faHeart} /> & gatsby by me
        </p>
      </div>
    </div>
  )
}

export default Footer
