import React from "react"
import { css } from "react-emotion"

const HeaderStyle = css`
  font-family: "Lobster Two";
  color: #ef762f;
  text-shadow: 4px 4px lightyellow;
  font-size: 4rem;
`
const Header = () => (
  <h1 className={HeaderStyle}>Mr Pinchy&apos;s Confession Box</h1>
)

export default Header
