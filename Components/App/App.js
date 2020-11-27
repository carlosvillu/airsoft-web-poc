import {
  useState,
  html,
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {
  Router,
  preact_async_route as AsyncRoute,
} from 'https://npm.reversehttp.com/preact-async-route,preact-router'

const loadHome = () => import('../Home/Home.js').then(m => m.Home)
const loadHello = () => import('../Hello/Hello.js').then(m => m.Hello)

const App = () => {
  const [name, setName] = useState('Carlitos')

  return html`
    <${Router}>
      <${AsyncRoute} path='/' getComponent=${loadHome} />
      <${AsyncRoute} path='/hello' getComponent=${loadHello} />
    </${Router}>
  `
}

export { App }
