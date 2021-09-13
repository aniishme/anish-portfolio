import React from "react"

import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import Skills from "../components/Skills"
import Works from "../components/Works"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Anish Sharma | Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <Intro />
        <Skills />
        <Works />
        <Contact />
      </div>
    </Layout>
  )
}
