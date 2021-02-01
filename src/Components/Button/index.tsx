import React from 'https://cdn.skypack.dev/react'
import classNames from 'https://cdn.skypack.dev/classnames'

const Button = ({ children, full, type, onClick }) => {
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
