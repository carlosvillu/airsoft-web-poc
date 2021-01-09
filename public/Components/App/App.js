import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {Layout} from '../Layout/Layout.js'

import {
  Router,
  preact_async_route as AsyncRoute
} from 'https://npm.reversehttp.com/preact-async-route,preact-router'

const loadHome = () => import('../Home/Home.js').then(m => m.Home)
const loadLogin = () => import('../Login/Login.js').then(m => m.Login)

const App = () => {
  return html`
  <${Layout}>
    <${Router}>
      <${AsyncRoute} path='/' getComponent=${loadHome} />
      <${AsyncRoute} path='/login' getComponent=${loadLogin} />
      <h1 path='/hello'>Hello</h1>
    </${Router}>
  </${Layout}>
  `
}

export {App}
