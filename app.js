/*global h*/

import {
  htm,
  render,
  createElement as c,
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import { App } from './Components/App/App.js'

function h(type, props, ...children) {
  return { type, props, children }
}

window.h = htm.bind(h)

render(
  h`
    <${App} />
  `,
  document.getElementById('app')
)
