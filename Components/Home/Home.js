import { html } from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

const Home = () => {
  return html`
    <h1>
      This is home, go to
      <a href="/hello">hello</a>
    </h1>
  `
}

export { Home }
