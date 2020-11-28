import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {Layout} from '../Layout/Layout.js'

import {
  Router,
  preact_async_route as AsyncRoute
} from 'https://npm.reversehttp.com/preact-async-route,preact-router'

const loadHome = () => import('../Home/Home.js').then(m => m.Home)

const App = () => {
  return html`
  <${Layout}>
    <${Router}>
      <${AsyncRoute} path='/' getComponent=${loadHome} />
      <h1 path='/hello'>Hello</h1>
    </${Router}>
  </${Layout}>  
  `
}

export {App}
