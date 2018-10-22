import React from "react"
import { css } from "react-emotion"

const HeaderStyle = css`
  font-family: "Lobster Two";
`
const Header = () => (
  <h1 className={HeaderStyle}>Welcome to Mr Pinchy&apos;s Confession Box</h1>
)

export default Header
