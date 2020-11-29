/* global classNames */
import {
  html,
  useState
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import 'https://npm.reversehttp.com/classnames'

import {MenuSVG} from '../SVG/Menu.js'

const Menu = ({children}) => {
  const [open, setOpen] = useState(false)
  const classContainerContent = classNames({
    h_100vh: true,
    w_100vw: true,
    pos_absolute: true,
    't-init': true,
    'l-init': true,
    bgc_white: true,
    d_none: !open,
    debug: true
  })
  return html`
    <${MenuSVG} onClick=${() => setOpen(true)} />
    <div class="${classContainerContent}">
      Menu!
    </div>
  `
}

export {Menu}
