import {
  html,
  render
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {App} from './Components/App/App.js'
import {Airsoft} from './domain/domain.js'

window.domain = Airsoft.create()

render(
  html`
    <${App} />
  `,
  document.getElementById('app')
)
