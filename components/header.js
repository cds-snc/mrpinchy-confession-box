import React from "react"
import PropTypes from "prop-types"

const Header = props => {
  return (
    <h1
      css={`
        font-family: "Lobster Two";
        font-size: 4rem;

        color: ${props.mode == "dark" ? "#d1d1d1" : "#ef762f"};
        text-shadow: 4px 4px ${props.mode == "dark" ? "#000000" : "lightyellow"};
      `}
    >
      Mr Pinchy&apos;s Confession Box
    </h1>
  )
}

Header.propTypes = {
  mode: PropTypes.string,
}

export default Header
