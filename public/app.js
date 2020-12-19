import {
  html,
  render
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {App} from './Components/App/App.js'
import {Airsoft} from './domain/domain.js'

const domain = Airsoft.create()
;(async () => {
  const user = await domain
    .get('SignUpUserUseCase')
    .execute({userName: 'carlos', password: '1234'})
  console.log({user})
})()

render(
  html`
    <${App} />
  `,
  document.getElementById('app')
)
