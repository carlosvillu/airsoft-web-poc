import React from 'react'

import { Button } from '../Button'
import { i18n } from '../../i18n/i18n.js'

const Login = () => {
  // const [username, setUsername] = useState()
  // const [password, setPassword] = useState()

  return (
    <form className="d_flex fxd_column w-full h-full ai_center jc_center">
      <label htmlFor="username" className="d_flex fxd_column w-xxl mb-l">
        <span className="pb-l pt-l">{i18n.t('USER_NAME')}</span>
        <input
          className="p-l"
          id="username"
          name="username"
          type="text"
          placeholder={i18n.t('USER_NAME')}
        />
      </label>

      <label htmlFor="password" className="d_flex fxd_column w-xxl mb-l">
        <span className="pb-l pt-l">{i18n.t('PASSWORD')}</span>
        <input
          className="p-l"
          id="password"
          name="password"
          type="password"
          placeholder={i18n.t('PASSWORD')}
        />
      </label>
      <Button full type={Button.TYPES.FLAT}>
        {i18n.t('LOGIN')}
      </Button>
    </form>
  )
}

export { Login }
