import React, { useState } from "react"

import Styles from "../styles/modules/contact.module.scss"

import Mailbox from "./Mailbox"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const buttonDisabled = () => {
    if (!name || !email || !message) {
      return true
    } else {
      if (
        email.includes("@") &&
        email.indexOf("@") !== 0 &&
        email.indexOf("@") !== email.length - 1
      ) {
        return false
      }
      return true
    }
  }

  // const handleSubmit = e => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": "contact",
  //       name: name,
  //       email: email,
  //       message: message,
  //     }),
  //   })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error))

  //   e.preventDefault()
  // }

  return (
    <div className={Styles.contactWrapper} id="contact">
      <h1>Get In Touch</h1>
      <div className={Styles.formWrapper}>
        <div className={Styles.mailbox}>
          <Mailbox />
        </div>

        <form
          className={Styles.form}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name" className={Styles.name}>
            <span>Name:</span>
            <input
              required
              type="text"
              id="name"
              name="name"
              onChange={e => setName(e.target.value)}
              value={name}
              placeholder="John Doe"
            />
          </label>
          <label htmlFor="email" className={Styles.email}>
            <span>Email:</span>
            <input
              required
              type="email"
              id="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="message" className={Styles.message}>
            <span>Message:</span>
            <textarea
              required
              name="message"
              id="message"
              cols="30"
              rows="10"
              onChange={e => setMessage(e.target.value)}
              value={message}
              placeholder="Hey, I want to talk to you !!!"
            />
          </label>
          <button
            disabled={buttonDisabled()}
            type="submit"
            className={Styles.submit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
