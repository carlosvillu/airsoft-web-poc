import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {Footer} from '../Footer/Footer.js'
import {Topbar} from '../Topbar/Topbar.js'
import {Sidebar} from '../Sidebar/Sidebar.js'

const Layout = ({children}) => {
  return html`
    <section class="bgc-secondary h-base">
      <header>
        <${Topbar} />
      </header>
      <div>
        <${Sidebar} />
      </div>
      <section>
        <main>
          ${children}
        </main>
      </section>
      <footer>
        <${Footer} />
      </footer>
    </section>
  `
}

export {Layout}
