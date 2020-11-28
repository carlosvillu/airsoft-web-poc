import {html} from 'https://npm.reversehttp.com/preact,preact/hooks,htm/preact'
import {Footer} from '../Footer/Footer.js'
import {Topbar} from '../Topbar/Topbar.js'
import {Navigation} from '../Navigation/Navigation.js'

const Layout = ({children}) => {
  return html`
    <section
      class="d_grid gta-holy-layout gtc-holy-layout gtr-holy-layout gg-holy-layout h_100vh"
    >
      <header class="debug ga-header h-s">
        <${Topbar} />
      </header>

      <nav class="ga-nav debug">
        <${Navigation} />
      </nav>

      <main class="ga-content debug">
        ${children}
      </main>

      <footer class="ga-footer debug">
        <${Footer} />
      </footer>
    </section>
  `
}

export {Layout}
