import React, { Component } from "react"
import Head from "next/head"
import Router from "next/router"
import Link from "next/link"
import Header from "../components/header"
import Container from "../components/container"
import MrPinchy from "../components/mrpinchy"
import SpeechBubble from "../components/speechbubble"

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    Router.push({
      pathname: "/",
    })
    event.preventDefault()
  }

  render() {
    return (
      <div
        css={`
          background-color: #212121;
          width: 100%;
          height: 100%;
        `}
      >
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lobster+Two"
            rel="stylesheet"
          />
          <title>Mr. Pinchy's (dark) confession box</title>
        </Head>
        <div
          css={`
            width: 100%;
            height: 1.5rem;
            margin: 0rem;
            padding: 0.5rem;

            & a {
              color: #ffffff;
              font-weight: bold;
            }
          `}
        >
          <Link href="/">Light Mode</Link>
        </div>
        <Container>
          <Header mode="dark" />
          <MrPinchy mode="dark" />
          <SpeechBubble
            mode="dark"
            text="Nobody exists on purpose, nobody belongs anywhere, tell me your secrets. Or don't. No one cares 😞 🦀"
          />
          <br />
          <button
            css={`
              background-color: #424242;
              color: white;
              padding: 12px 20px;
              border: 2px solid #d1d1d1;
              border-radius: 4px;
              cursor: pointer;
              float: center;
              font-size: 1rem;
              margin-top: 5rem;
            `}
            onClick={this.handleClick}
          >
            Woah, too dark, take me out of here
          </button>
        </Container>
      </div>
    )
  }
}

export default App
