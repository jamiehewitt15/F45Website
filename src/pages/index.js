import React from "react"
import Welcome from "../components/welcome"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
    <Welcome />
    <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    </div>
      <h1>Hello Gatsby!</h1>
      <h2>Test 2</h2>
      <h3>Test 3</h3>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>

  </Layout>
    
  )