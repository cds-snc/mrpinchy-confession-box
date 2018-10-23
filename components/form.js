import React, { Component } from "react"
import { css } from "react-emotion"

const formStyle = css`
  margin-top: 3rem;
  font-family: SourceSans, Helvetica, Arial, sans-serif;

  label {
    display: inline-block;
  }

  input {
    background-color: #ef762f;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: center;
    font-size: 1rem;
    margin-top: 2rem;
  }

  textarea {
    width: 550px;
    height: 300px;
    box-sizing: border-box;
    border: none;
    background-color: lightyellow;
    border-radius: 20px;
    resize: none;
    font-size: 1rem;
    padding: 20px;
  }
`

class Form extends Component {
  render() {
    return (
      <form className={formStyle}>
        <label>
          <textarea placeholder="Tell the friendly crustacean what's on your mind..." />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
