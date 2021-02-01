import React from 'react'
import classNames from 'classnames'

type Props = {
  children: React.ReactChild,
  full: boolean,
  type: string,
  onClick?: React.EventHandler<React.SyntheticEvent>
}

const Button = ({ children, full, type, onClick }: Props) => {
  const classButton = classNames(STYLES_BY_TYPE[type], {
    'w-full': full
  })
  return (
    <button className={classButton} onClick={onClick}>
      {children}
    </button>
  )
}
Button.TYPES = {
  FLAT: 'flat'
}

const STYLES_BY_TYPE = {
  [Button.TYPES.FLAT]: 'bgc_transparent c-accent bd_none pb-l pt-l'
}
export { Button }
