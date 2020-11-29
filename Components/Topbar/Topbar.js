import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'

import {Menu} from '../Menu/Menu.js'

const Topbar = ({children}) => {
  return html`
    <div class="h-full d_flex ml-l mr-l ai_center">
      <${Menu} />
    </div>
  `
}

export {Topbar}
