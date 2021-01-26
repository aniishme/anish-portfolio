import React from "react"


import Layout from "../components/Layout"
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Works from '../components/Works'


export default function Home() {
  return (
    
      <Layout>
        <div>
          <Intro/>
          <Skills/>
          <Works/>
        </div>
      </Layout>
    
  )
}
