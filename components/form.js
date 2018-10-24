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
      formError: "",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    // empty form
    if (!this.state.value) {
      // eslint-disable-next-line no-console
      console.error("COnfession is empty")
      this.setState({ formError: "empty-message" })
    }

    // script tags
    if (
      this.state.value.includes("<script>") ||
      this.state.value.includes("</script>")
    ) {
      // eslint-disable-next-line no-console
      console.error("Confession contains script tags")
      this.setState({ formError: "script-tag" })
    }

    // not words

    if (this.state.value.match(/^\d+$/)) {
      // eslint-disable-next-line no-console
      console.error("Confession only contains numbers")
      this.setState({ formError: "no-words" })
    }

    // swear words
    if (filter.isProfane(this.state.value)) {
      // eslint-disable-next-line no-console
      console.error("Confession contains profanity")
      this.setState({ formError: "profanity" })
    }

    // it's fine! Submit

    // if (!this.state.value) {
    //   // eslint-disable-next-line no-console
    //   console.error("Confession cannot be empty")
    //   //   Router.push({
    //   //     pathname: "/error",
    //   //     query: { error: "empty-message" },
    //   //   })
    // }

    // // if (this.state.value.match(/[< | >]*/)) {
    // //   // eslint-disable-next-line no-console
    // //   console.error("Invalid characters")
    // //   Router.push({
    // //     pathname: "/error",
    // //     query: { error: "invalid-characters" },
    // //   })
    // // }

    // // eslint-disable-next-line no-console
    // console.log(this.state.value)
    // Router.push({
    //   pathname: "/thankyou",
    // })

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
