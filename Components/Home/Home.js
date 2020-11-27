import { htm, createElement as c } from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

const Home = () => {
  return c('h1', null, c('a', { href: '/hello' }, 'This is Home, go to Hello'))
}

export { Home }
