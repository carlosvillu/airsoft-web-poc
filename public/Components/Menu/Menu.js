/* global classNames */
import {
  html,
  useState
} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import 'https://npm.reversehttp.com/classnames'

import {MenuSVG} from '../SVG/Menu.js'
import {CloseSVG} from '../SVG/Close.js'
import {Navigation} from '../Navigation/Navigation.js'

const Menu = ({children}) => {
  const [open, setOpen] = useState(false)
  const classContainerContent = classNames(
    'h_100vh w_100vw pos_absolute t-init l-init bgc-primary',
    {
      d_none: !open
    }
  )

  const closePanel = () => setOpen(false)

  return html`
    <${MenuSVG} className="tld__d_none" onClick=${() => setOpen(true)} />
    <div class="${classContainerContent}">
      <header class="h-s d_flex pl-l pr-l ai_center jc_flex-end ">
        <${CloseSVG} onClick=${closePanel} />
      </header>
      <div class="p-xl">
        <${Navigation} onNavigate=${closePanel} />
      </div>
    </div>
  `
}

export {Menu}
