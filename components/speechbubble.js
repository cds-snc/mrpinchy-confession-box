import React, { Component } from "react"
import { css } from "react-emotion"
import PropTypes from "prop-types"

//CSS from https://codepen.io/Founts/pen/gmhcl

const talkBubble = css`
  margin: 40px;
  display: inline-block;
  position: relative;
  width: 200px;
  height: auto;
  background-color: lightyellow;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;

  ::after {
    content: " ";
    position: absolute;
    width: 0;
    height: 0;
    left: -20px;
    right: auto;
    top: 38px;
    bottom: auto;
    border: 12px solid;
    border-color: lightyellow lightyellow transparent transparent;
  }
`

const talkText = css`
  padding: 1em;
  text-algin: left;
  line-height: 1.5em;
`

class SpeechBubble extends Component {
  render() {
    return (
      <div className={talkBubble}>
        <div className={talkText}>{this.props.text}</div>
      </div>
    )
  }
}

SpeechBubble.propTypes = {
  text: PropTypes.string,
}

export default SpeechBubble
