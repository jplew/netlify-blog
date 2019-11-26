import React, { Component } from "react"
import content from "../content/home.md"
import Head from "next/head"

type Cat = {
  name: string
  description: string
}

export default class Home extends Component {
  render() {
    const {
      html,
      attributes: { title, cats }
    } = content

    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <ul>
            {cats.map((cat: Cat, k: number) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}
