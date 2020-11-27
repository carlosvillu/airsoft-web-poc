import {
  render,
  createElement as c,
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import { App } from './Components/App/App.js'

render(c(App), document.getElementById('app'))
