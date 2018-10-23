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
  constructor(props) {
    super(props)
    this.state = { value: "" }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    // eslint-disable-next-line no-console
    console.log("Submit was pressed")
    event.preventDefault()
  }
  render() {
    return (
      <form className={formStyle} onSubmit={this.handleSubmit}>
        <label>
          <textarea
            placeholder="Tell the friendly crustacean what's on your mind..."
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Form
