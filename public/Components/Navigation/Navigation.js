import {
  html,
  useEffect,
  useState
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {route} from 'https://npm.reversehttp.com/preact-async-route,preact-router'
import {Button} from '../Button/Button.js'

import {i18n} from '../../i18n/i18n.js'

const Navigation = ({onNavigate}) => {
  const [user, setUser] = useState()

  useEffect(() => {
    window.domain
      .get('CurrentUserUseCase')
      .execute()
      .then(setUser)
      .catch(window.console.error.bind(window.console,'Error in Navigation getting the current user')) // eslint-disable-line
  }, [])

  const handleOnLogin = () => {
    route('/login', true)
    onNavigate()
  }
  const handleOnLogOut = () => {
    window.domain
      .get('SignOutUserUseCase')
      .execute()
      .then(resp => {
        if (resp.status) {
          setUser(null)
        }
      })
      .catch(window.console.error.bind(window.console,'Error in Navigation logout the current user')) // eslint-disable-line
  }

  const LOGOUT_BUTTON = html`<${Button} full type="${Button.TYPES.FLAT}" onClick=${handleOnLogOut}>${i18n.t('LOGOUT')}</${Button}>` // eslint-disable-line
  const LOGIN_BUTTON = html`<${Button} full type="${Button.TYPES.FLAT}" onClick=${handleOnLogin}>${i18n.t('LOGIN')}</${Button}>` // eslint-disable-line

  return html`
    <div class="d_flex fxd_column">
      ${!user ? LOGIN_BUTTON : LOGOUT_BUTTON}
      <${Button} full type="${Button.TYPES.FLAT}">${i18n.t('TEAM')}</${Button}>
      <${Button} full type="${Button.TYPES.FLAT}">${i18n.t('STATS')}</${Button}>
    </div>
  `
}

export {Navigation}
