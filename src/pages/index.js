import React from "react"


import Layout from "../components/Layout"
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Contact from '../components/Contact'


export default function Home() {
  return (
    
      <Layout>
        <div>
          <Intro/>
          <Skills/>
          <Works/>
          <Contact/>
        </div>
      </Layout>
    
  )
}
