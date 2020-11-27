import { useState, createElement as c } from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import { Router } from 'https://npm.reversehttp.com/preact-router'

const App = () => {
  const [name, setName] = useState('Carlitos')
  return c('h1', null, 'Hola!')
}

export { App }
