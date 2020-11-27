import {
  useState,
  createElement as c,
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {
  Router,
  preact_async_route as AsyncRoute,
} from 'https://npm.reversehttp.com/preact-async-route,preact-router'

import { Home } from '../Home/Home.js'

const App = () => {
  const [name, setName] = useState('Carlitos')

  return c(Router, null, [
    c(Home, { path: '/' }),
    c(AsyncRoute, {
      path: '/hello',
      getComponent: () => import('../Hello/Hello.js').then(m => m.Hello),
    }),
  ])

  // return c('h1', null, name)
}

export { App }
