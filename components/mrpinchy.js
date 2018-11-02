import React from "react"
import PropTypes from "prop-types"

const MrPinchy = props => (
  <img
    css={`
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 0.4rem solid ${props.mode == "dark" ? "#424242" : "#ef762f"};
      background-color: white;
    `}
    src="/static/opensquish_crab_15.jpg"
  />
)

MrPinchy.propTypes = {
  mode: PropTypes.string,
}

export default MrPinchy
