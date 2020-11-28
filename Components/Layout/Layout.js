import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

const Layout = ({children}) => {
  return html`
    <${Topbar} />
    <${Aside} />
    ${children}
    <${Footer} />
  `
}

export {Layout}
