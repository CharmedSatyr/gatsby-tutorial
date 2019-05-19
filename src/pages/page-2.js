import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <Link to="/page-3/">Go to the third page</Link>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage