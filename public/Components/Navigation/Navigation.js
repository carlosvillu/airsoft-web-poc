import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {Button} from '../Button/Button.js'

import {i18n} from '../../i18n/i18n.js'

const Navigation = () => {
  return html`
    <div class="d_flex fxd_column">
      <${Button} full type="${Button.TYPES.FLAT}">${i18n.t('TEAM')}</${Button}>
      <${Button} full type="${Button.TYPES.FLAT}">${i18n.t('STATS')}</${Button}>
    </div>
  `
}

export {Navigation}
