import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {Button} from '../Button/Button.js'
const array = ['foo', 'bar']
const Navigation = () => {
  return html`
    <div class="d_flex fxd_column">
      ${array.map(
        label =>
          html`<${Button} full type="${Button.TYPES.FLAT}">${label}</${Button}>`
      )}
    </div>
  `
}

export {Navigation}
