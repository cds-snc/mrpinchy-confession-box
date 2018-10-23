import React, { Component } from "react"
import { injectGlobal } from "emotion"
import { css } from "react-emotion"
import Head from "next/head"
import Header from "../components/header"
import Container from "../components/container"
import MrPinchy from "../components/mrpinchy"
import SpeechBubble from "../components/speechbubble"
import Router from "next/router"

injectGlobal`
    body {
        background-color: lightblue;
        font-family: SourceSans, Helvetica, Arial, sans-serif;
    }
`

const buttonStyle = css`
  background-color: #ef762f;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: center;
  font-size: 1rem;
  margin-top: 2rem;
`
class ThankYou extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // eslint-disable-next-line no-console
    console.log("Clicked the 'Tell Mr. Pinchy more' button")
    Router.push({
      pathname: "/",
    })
  }

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
          <MrPinchy />
          <SpeechBubble text="Thanks for letting me know what's up! Remeber that like Sean Boots, I think you're awesome 😊 🦀 " />
          <br />
          <br />
          <button className={buttonStyle} onClick={this.handleClick}>
            Tell Mr. Pinchy more
          </button>
        </Container>
      </div>
    )
  }
}

export default ThankYou
