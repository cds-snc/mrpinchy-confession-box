import React, { Component } from "react"
import { css } from "react-emotion"
import PropTypes from "prop-types"

const style = css`
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  text-align: center;
`

class Container extends Component {
  render() {
    return <div className={style}>{this.props.children}</div>
  }
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

export default Container
