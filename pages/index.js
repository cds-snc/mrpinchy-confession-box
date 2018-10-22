import React, { Component } from "react"
import Head from "next/head"
import Header from "../components/header"
import Container from "../components/container"
import { css } from "react-emotion"

const Text = css`
  color: #e86502;
`

class App extends Component {
  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lobster+Two"
            rel="stylesheet"
          />
        </Head>
        <Container>
          <Header />
          <div className={Text}>Hey what does this text look like?</div>
        </Container>
      </div>
    )
  }
}

export default App
