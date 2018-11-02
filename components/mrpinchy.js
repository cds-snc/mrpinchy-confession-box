import React from "react"
import styled from "react-emotion"
import PropTypes from "prop-types"

const Avatar = styled("img")`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 0.4rem solid "#ef762f"};
  background-color: white;
`

const MrPinchy = props => (
  <Avatar mode={props.mode} src="/static/opensquish_crab_15.jpg" />
)

MrPinchy.propTypes = {
  mode: PropTypes.string,
}

export default MrPinchy
