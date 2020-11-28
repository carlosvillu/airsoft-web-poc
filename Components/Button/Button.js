import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

const Button = ({children}) => {
  return html`
    <button class="w-full">${children}</button>
  `
}

export {Button}
