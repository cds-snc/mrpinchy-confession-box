import React, { Component } from "react"
import { css } from "react-emotion"
import Router from "next/router"
import Filter from "bad-words"

var filter = new Filter()

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
    this.state = {
      value: "",
      formError: "empty-message",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })

    // validate form input, checking for content, script tags, profanity & actual words
    if (!event.target.value) {
      // eslint-disable-next-line no-console
      console.error("Confession is empty")
      this.setState({ formError: "empty-message" })
    } else if (
      event.target.value.includes("<script>") ||
      event.target.value.includes("</script>")
    ) {
      // eslint-disable-next-line no-console
      console.error("Confession contains script tags")
      this.setState({ formError: "script-tag" })
    } else if (event.target.value.match(/^\d+$/)) {
      // eslint-disable-next-line no-console
      console.error("Confession only contains numbers")
      this.setState({ formError: "no-words" })
    } else if (filter.isProfane(event.target.value)) {
      // eslint-disable-next-line no-console
      console.error("Detected profanity in typing")
      this.setState({ formError: "profanity" })
    } else {
      this.setState({ formError: "none" })
    }
  }

  handleSubmit(event) {
    if (this.state.formError != "none") {
      Router.push({
        pathname: "/error",
        query: { error: this.state.formError },
      })
    } else {
      // eslint-disable-next-line no-console
      console.log("Confession submitted: " + this.state.value)
      Router.push({
        pathname: "/thankyou",
      })
    }

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
