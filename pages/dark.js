import React, { Component } from "react"
import { injectGlobal } from "emotion"
import Head from "next/head"
import Header from "../components/header"
import Container from "../components/container"
import MrPinchy from "../components/mrpinchy"
import SpeechBubble from "../components/speechbubble"

injectGlobal`
    body {
        background-color: #212121;
        font-family: SourceSans, Helvetica, Arial, sans-serif;
    }
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
          <Header mode="dark" />
          <MrPinchy />
          <SpeechBubble
            text="Hello! My name is Mr. Pinchy and I&apos;m here to listen to all your
            confessions! Just type below 😊 🦀"
          />
        </Container>
      </div>
    )
  }
}

export default App
