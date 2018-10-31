import React, { Component } from "react"
import { injectGlobal } from "emotion"
import { css } from "react-emotion"
import Head from "next/head"
import Header from "../components/header"
import Container from "../components/container"
import MrPinchy from "../components/mrpinchy"
import SpeechBubble from "../components/speechbubble"
import Router from "next/router"
import PropTypes from "prop-types"

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
class Error extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.errorMessage = this.errorMessage.bind(this)
  }

  static getInitialProps({ query: { error } }) {
    return { error }
  }

  errorMessage() {
    if (this.props.error == "script-tag")
      return "Hmm... that message doesn't seem right. Did you use a weird symbol? How about you try again 😞 🦀 "
    if (this.props.error == "empty-message")
      return "Oh no, it looks like your message is empty! How about you try again 😞 🦀 "
    if (this.props.error == "profanity")
      return "Why are you swearing at me?? I'm just a friendly crustacean! How about you try again 😞 🦀 "
    if (this.props.error == "no-words")
      return "Are you sure you wrote me a message, because it looks just like numbers to me. How about you try again 😞 🦀 "

    return "Hmm, it looks like something went wrong. How about you try again 😞 🦀 "
  }

  handleClick() {
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
          <SpeechBubble text={this.errorMessage()} />
          <br />
          <br />
          <button className={buttonStyle} onClick={this.handleClick}>
            Try again!
          </button>
        </Container>
      </div>
    )
  }
}

Error.propTypes = {
  error: PropTypes.string,
}

export default Error
