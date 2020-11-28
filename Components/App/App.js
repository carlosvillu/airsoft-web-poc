import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {
  Router,
  preact_async_route as AsyncRoute
} from 'https://npm.reversehttp.com/preact-async-route,preact-router'

const loadHome = () => import('../Home/Home.js').then(m => m.Home)

const App = () => {
  return html`
    <${Router}>
      <${AsyncRoute} path='/' getComponent=${loadHome} />
    </${Router}>
  `
}

export {App}
