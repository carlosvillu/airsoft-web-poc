import {
  html,
  render
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {App} from './Components/App/App.js'

render(
  html`
    <${App} />
  `,
  document.getElementById('app')
)
