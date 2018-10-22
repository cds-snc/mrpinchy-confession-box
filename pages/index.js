import React, { Component } from "react"
import Head from "next/head"
import Header from "../components/header"

class App extends Component {
  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Lobster+Two"
            rel="stylesheet"
          />
        </Head>
        <Header />
      </div>
    )
  }
}

export default App
