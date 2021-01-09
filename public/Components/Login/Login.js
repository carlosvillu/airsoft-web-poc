import {
  html
  // useState
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {Button} from '../Button/Button.js'
import {i18n} from '../../i18n/i18n.js'

const Login = () => {
  // const [username, setUsername] = useState()
  // const [password, setPassword] = useState()

  return html`
    <form class="d_flex fxd_column w_100vw h-full ai_center jc_center">
      <label for="username" class="d_flex fxd_column w-xxl mb-l">
        <span class="pb-l pt-l">${i18n.t('USER_NAME')}</span>
        <input
          class="p-l"
          id="username"
          name="username"
          type="text"
          placeholder=${i18n.t('USER_NAME')}
        />
      </label>

      <label for="password" class="d_flex fxd_column w-xxl mb-l">
        <span class="pb-l pt-l">${i18n.t('PASSWORD')}</span>
        <input
          class="p-l"
          id="password"
          name="password"
          type="password"
          placeholder=${i18n.t('PASSWORD')}
        />
      </label>
      <${Button} full type="${Button.TYPES.FLAT}">${i18n.t('LOGIN')}</${Button}>
    </form>
  `
}

export {Login}
