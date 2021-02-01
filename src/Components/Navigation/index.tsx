import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { Button } from '../Button'
import { i18n } from '../../i18n/i18n.js'

const Navigation = ({ onNavigate }: {onNavigate?: Function}) => {
  const history = useHistory()
  const [user, setUser] = useState()

  useEffect(() => {
    window.domain
      .get('CurrentUserUseCase')
      .execute()
      .then(setUser)
      .catch(window.console.error.bind(window.console,'Error in Navigation getting the current user')) // eslint-disable-line
  }, [])

  const handleOnLogin = () => {
    history.push('/login', true)
    onNavigate && onNavigate()
  }
  const handleOnLogOut = () => {
    window.domain
      .get('SignOutUserUseCase')
      .execute()
      .then(resp => {
        if (resp.status) {
          setUser(undefined)
        }
      })
      .catch(window.console.error.bind(window.console,'Error in Navigation logout the current user')) // eslint-disable-line
  }

  const LOGOUT_BUTTON = (
    <Button full type={Button.TYPES.FLAT} onClick={handleOnLogOut}>
      {i18n.t('LOGOUT')}
    </Button>
  )
  const LOGIN_BUTTON = (
    <Button full type={Button.TYPES.FLAT} onClick={handleOnLogin}>
      {i18n.t('LOGIN')}
    </Button>
  )

  return (
    <div className="d_flex fxd_column">
      {!user ? LOGIN_BUTTON : LOGOUT_BUTTON}
      <Button full type={Button.TYPES.FLAT}>
        {i18n.t('TEAM')}
      </Button>
      <Button full type={Button.TYPES.FLAT}>
        {i18n.t('STATS')}
      </Button>
    </div>
  )
}

export { Navigation }
