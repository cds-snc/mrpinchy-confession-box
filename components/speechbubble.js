import React, { Component } from "react"
import { css } from "react-emotion"
import PropTypes from "prop-types"

//CSS from https://codepen.io/Founts/pen/gmhcl

class SpeechBubble extends Component {
  render() {
    return (
      <div
        css={css`
          margin: 40px;
          display: inline-block;
          position: relative;
          width: 200px;
          height: auto;
          color: ${this.props.mode == "dark" ? "#FFFFFF" : "#000000"};
          background-color: ${this.props.mode == "dark"
            ? "#424242"
            : "lightyellow"};
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
            border-color: ${this.props.mode == "dark"
                ? "#424242 #424242"
                : "lightyellow lightyellow"}
              transparent transparent;
          }
        `}
      >
        <div
          css={css`
            padding: 1em;
            text-algin: left;
            line-height: 1.5em;
          `}
        >
          {this.props.text}
        </div>
      </div>
    )
  }
}

SpeechBubble.propTypes = {
  text: PropTypes.string,
  mode: PropTypes.string,
}

export default SpeechBubble
