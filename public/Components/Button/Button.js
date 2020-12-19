/* global classNames */
import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import 'https://npm.reversehttp.com/classnames'

const Button = ({children, full, type}) => {
  const classButton = classNames(STYLES_BY_TYPE[type], {
    'w-full': full
  })
  return html`
    <button class="${classButton}">${children}</button>
  `
}
Button.TYPES = {
  FLAT: 'flat'
}

const STYLES_BY_TYPE = {
  [Button.TYPES.FLAT]: 'bgc_transparent c-accent bd_none pb-l pt-l'
}
export {Button}
