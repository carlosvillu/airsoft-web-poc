import {
  html,
  render
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {App} from './Components/App/App.js'

const DEBUG = true

if (DEBUG) {
  document.documentElement.style.setProperty(
    '--c-debug',
    `hsl(${360 * Math.random()}, 80%, 40%)`
  )
}
render(
  html`
    <${App} />
  `,
  document.getElementById('app')
)
