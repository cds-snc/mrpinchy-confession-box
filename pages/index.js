import React, { Component } from "react"
import { injectGlobal } from "emotion"
import Head from "next/head"
import Link from "next/link"
import Header from "../components/header"
import Container from "../components/container"
import MrPinchy from "../components/mrpinchy"
import SpeechBubble from "../components/speechbubble"
import Form from "../components/form"

injectGlobal`
    body {
      font-family: SourceSans, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: lightblue;
    }

`

class App extends Component {
  render() {
    return (
      <div
        css={`
          width: 100%;
          height: 100vh;
          background-color: lightblue;
        `}
      >
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lobster+Two"
            rel="stylesheet"
          />
          <title>Mr Pinchy&apos;s confession box</title>
        </Head>
        <div
          css={`
            width: 100%;
            height: 1.5rem;
            margin: 0rem;
            padding: 0.5rem;

            & a {
              color: #f95b00;
              font-weight: bold;
            }
          `}
        >
          <Link href="/dark">Dark Mode</Link>
        </div>
        <Container>
          <Header mode="light" />
          <MrPinchy />
          <SpeechBubble
            text="Hello! My name is Mr. Pinchy and I&apos;m here to listen to all your
            confessions! Just type below 😊 🦀"
          />
          <Form />
        </Container>
      </div>
    )
  }
}

export default App
